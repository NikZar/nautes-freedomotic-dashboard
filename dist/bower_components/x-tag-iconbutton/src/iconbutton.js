(function(){
    // dataUrl for a 1x1 transparent gif
    var EMPTY_SRC = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
    var IMG_NODE_NAME = document.createElement("img").nodeName;
    var DEFAULT_TEXT_GETTER = function(iconButton){
                                 return iconButton.xtag.contentEl.textContent;
                              };
    var DEFAULT_TEXT_SETTER = function(iconButton, newText){
                                  iconButton.xtag.contentEl.textContent = newText;
                              };
    var SPACE_KEYCODE = 32;
    var ENTER_KEYCODE = 13;

    // hides/unhides parts of the button depending on if they have any content,
    // also removes image source if explicitly given a null/empty src
    function updatePartsVisibility(elem, iconSrc){
        // if the icon is an img tag, modify based on its img src
        if(elem.xtag.iconEl.nodeName === IMG_NODE_NAME){
            iconSrc = (iconSrc !== undefined) ? iconSrc : elem.xtag.iconEl.src;
            // replace image with empty source if given an empty source
            if(!iconSrc){
                elem.xtag.iconEl.src = EMPTY_SRC;
            }

            // only show if given a valid source that is not empty
            elem.xtag.iconEl.style.display =
                (iconSrc && iconSrc !== EMPTY_SRC) ? "" : "none";
        }
        // if the icon isn't an img tag, modify based on its innerHTML
        else{
            elem.xtag.iconEl.style.display =
                (elem.xtag.iconEl.innerHTML) ? "" : "none";
        }

        elem.xtag.contentEl.style.display =
            (elem.xtag.contentEl.innerHTML) ? "" : "none";
    }

    // updates the html layout order of the icon and label to match any given
    // anchors
    function updatePartsOrder(elem){
        var icon = elem.xtag.iconEl;
        var label = elem.xtag.contentEl;
        if(!(label && icon)) return;

        var parent = icon.parentNode;
        if((!parent) || label.parentNode !== parent){
            throw "invalid parent node of iconbutton's icon / label";
        }

        switch(elem.iconAnchor){
            // icon goes after label
            case "right":
            case "bottom":
                parent.insertBefore(label, icon);
                break;

            //icon goes before label
            //case "left":
            //case "top":
            default:
                parent.insertBefore(icon, label);
                break;
        }
    }

    function _deactivateButtons(e){
        xtag.query(document, "x-iconbutton[active]").forEach(function(button){
            button.removeAttribute("active");
        });
    }

    function _unfocusButtons(){
        xtag.query(document, "x-iconbutton:focus").forEach(function(button){
            button.blur();
        });
    }

    function _unselectAllButtons(e){
        _deactivateButtons(e);
        _unfocusButtons();
    }

    var DOC_LISTENER_FNS = null;

    xtag.register("x-iconbutton", {
        lifecycle:{
            // creates a <button> element with top-level <figure> wrapper for
            // the icon's <img> element
            // and a <span> element for the label
            created: function(){
                var content = this.innerHTML;
                this.innerHTML = "<div class='x-iconbutton-content-wrap'>"+
                                   "<img class='x-iconbutton-icon' "+
                                   "     src='"+EMPTY_SRC+"'/>"+
                                   "<span class='x-iconbutton-content'></span>"+
                                 "</div>"+
                                 "<div class='x-iconbutton-ghost'></div>";
                this.xtag.iconEl = this.querySelector(".x-iconbutton-icon");
                this.xtag.contentEl = this.querySelector(".x-iconbutton-content");
                // don't forget to insert content here
                this.xtag.contentEl.innerHTML = content;

                // set up default getter and setters for modifying text content
                // default behavior: modify text directly
                if(!this.textGetter){
                    this.textGetter = DEFAULT_TEXT_GETTER;
                }
                if(!this.textSetter){
                    this.textSetter = DEFAULT_TEXT_SETTER;
                }

                updatePartsOrder(this);
                updatePartsVisibility(this);

                if(!this.hasAttribute("tabindex")){
                    this.setAttribute("tabindex", 0);
                }
            },
            inserted: function() {
                if(!DOC_LISTENER_FNS){
                    DOC_LISTENER_FNS = {
                        "tapend": xtag.addEvent(document, "tapend",
                                                _unselectAllButtons),
                        "dragend": xtag.addEvent(document, "dragend",
                                                _unselectAllButtons),
                        "keyup": xtag.addEvent(document, "keyup",
                                                _deactivateButtons)
                    };
                }
                updatePartsOrder(this);
                updatePartsVisibility(this);
            },
            removed: function(){
                if(DOC_LISTENER_FNS && !document.query("x-calendar")){
                    for(var eventType in DOC_LISTENER_FNS){
                        xtag.removeEvent(document, eventType,
                                         DOC_LISTENER_FNS[eventType]);
                    }
                    DOC_LISTENER_FNS = null;
                }
            },
            attributeChanged: function(){
                var iconEl = this.iconEl;
                var contentEl = this.contentEl;
                if(!(iconEl.parentNode &&
                     iconEl.parentNode.parentNode === this &&
                     contentEl.parentNode &&
                     contentEl.parentNode.parentNode === this))
                {
                    console.warn("inner DOM of the iconbutton appears to be "+
                                "out of sync; make sure that editing innerHTML"+
                                " or textContent is done through .contentEl, "+
                                "not directly on the iconbutton itself");
                }
                updatePartsOrder(this);
                updatePartsVisibility(this);
            }
        },
        events: {
            "tapstart": function(e){
                e.currentTarget.setAttribute("active", true);
            },
            // allow 'clicking' with enter/space keys when focused
            "keypress": function(e){
                var keyCode = e.key || e.keyCode;
                if(keyCode === SPACE_KEYCODE || keyCode === ENTER_KEYCODE){
                    e.currentTarget.click();
                }
            },
            "keydown": function(e){
                var keyCode = e.key || e.keyCode;
                if(keyCode === SPACE_KEYCODE || keyCode === ENTER_KEYCODE){
                    e.currentTarget.setAttribute("active", true);
                }
            }
        },
        accessors: {
            "src": {
                attribute: {},
                get: function(){
                    return this.xtag.iconEl.getAttribute("src");
                },
                set: function(newSrc){
                    this.xtag.iconEl.setAttribute("src", newSrc);
                    this.xtag.iconEl.src = newSrc;
                    updatePartsVisibility(this, newSrc);
                }
            },
            "active":{
                attribute:{}
            },
            "iconAnchor": {
                attribute: {name: "icon-anchor"},
                set: function(newAnchor){
                    updatePartsOrder(this);
                }
            },
            "iconEl": {
                get: function(){
                    return this.xtag.iconEl;
                }
            },
            "contentEl": {
                get: function(){
                    return this.xtag.contentEl;
                }
            }
        }
    });

})();