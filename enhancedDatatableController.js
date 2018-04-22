({
    doInit : function(component, event, helper) {
        var action = component.get("c.getDetails");
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state=='SUCCESS'){
                component.set("v.data",response.getReturnValue());
                
            }
            /*$(document).ready( function () {
                $('#table_id').DataTable();
            } );*/
             setTimeout(function(){ 
            
             $('#tableId').DataTable();
             $('div.dataTables_filter input').addClass('slds-input');
            //$('div.dataTables_filter input').css("marginBottom", "10px");
               }, 300);
        });
        $A.enqueueAction(action);
    }
    
})