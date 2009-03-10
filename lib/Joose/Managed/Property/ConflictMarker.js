Joose.Managed.Property.ConflictMarker = new Joose.Proto.Class('Joose.Managed.Property.ConflictMarker', null, Joose.Managed.Property, {

    apply : function(target){
        throw "Attempt to apply ConflictMarker [" + this.name + "] to [" + target + "]";
    },
    
    
    unapply : function(from){
        throw "Attempt to unapply ConflictMarker [" + this.name + "] from [" + from + "]";
    }
    
}).c;