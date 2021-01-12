/**
 * Tekyon UI
 * DOM Client
 * Applies mutations to the live DOM on the main thread
*/

function getProp(obj, prop) {
    // Replace [] notation with dot notation
    prop = prop.replace(/\[["'`](.*)["'`]\]/g,".$1");

    return prop.split('.').reduce(function(prev, curr) {
        return prev ? prev[curr] : undefined;
    }, obj || self);
}

function setNestedKey (obj, path, value) {
    if (path.length === 1) {
      obj[path] = value;
      return;
    }
    return setNestedKey(obj[path[0]], path.slice(1), value);
}

class DOMClient {

    run(data) {

        data.forEach(mutation => {
            
            var node;

            // Select node by ID
            if((typeof mutation.id) != "object")
                node = document.getElementById(mutation.id);
            else {
                
                var data = mutation.id;

                // Select node by Query Selector
                if(data.type == 'querySelector') {

                    var parent = document.getElementById(data.parent);
                    node = parent.querySelector(data.query);

                }

            }
            
            // DOM Mutation
            if(mutation.t == "dom") {
                setNestedKey(node, mutation.prop, mutation.val);
            }

            // Style Mutation
            else if(mutation.t == "style") {

                // Faster execution, more repaints
                if(mutation.r === false) {
                    for(var style in mutation.styles) {
                        node.style[style] = mutation.styles[style];
                    }
                }
                // One repaint, but slower execution
                else if (mutation.r === true) {
                    var text = "";
                    for(var style in mutation.styles) {
                        var val = style;
                        var dashVal = val.replace(/[A-Z]/g, m => "-" + m.toLowerCase());
                        text += dashVal + ":" + mutation.styles[style] + ";";
                    }

                    node.style.cssText += text;
                }

            }

        });

    }

}

export default new DOMClient;