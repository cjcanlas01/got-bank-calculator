const $ = (sel) => {
    let obj = document.querySelectorAll(sel);
    let length = obj.length;

    if (length > 1) {
        return new JS(obj)['obj'];
    }

    return new JS(obj[0]);
}

class JS {
    constructor(elem) {
        this.obj = elem;
    }

    listen (ev, func) {
        let obj = this.obj;
        return obj.addEventListener(ev, func);
    }

    val(data = null) {
        if(typeof data == 'string') {
            if(!data) {
                return this.obj.value = "";
            }
            return this.obj.value = data;
        }
        return this.obj.value;
    }

    html(data = null) {
        if(typeof data == 'string') {
            if(!data) {
                return this.obj.innerHTML = "";
            }
            return this.obj.innerHTML = data;
        }
        return this.obj.innerHTML;
    }
    
    style(prop = null, value = null) {
        if(prop) {
            return this.obj.style[prop] = value;
        }
        return this.obj.style;
    }
}

export default $;