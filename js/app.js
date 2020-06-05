

let UIcontroller = (()=>{

    //set ids
    //set arr val to table 
    //set total value 
    let DOMstr = {
        tot : document.getElementById('tot'),
        table : document.getElementById('tb')
    }


    return{
        DOM : DOMstr,
        date : function(obj){
         
            DOMstr.tot.innerText = obj;
        },
        setTable : (data)=>{
            DOMstr.table.insertAdjacentHTML('beforeend',data)
        }
        
    }
})();


let BusinessController = (()=>{

    //init array
    //set value to array
    //calculate
  

    return{
        number :  ()=>{
           
            return Math.floor(Math.random() * 10); 
        },
        garTable : (name,num)=>{
            return ` 
          <tr>
            <td>${name}</td>
            <td>${num}</td>
            <td>${num}</td>
          </tr>
          `
        }
    }
})();



let controller = ((UICrtl,BCrtl)=>{

    //click event 
        //read form val from click event 
        //push to array
        //cal total
        //set all to DOM
    var setupEventListeners = function() {
        $('#sub').click(function (e) { 
            
            setDate();
            setTable();
        });
    }

    var setDate = ()=>{
        UICrtl.date(BCrtl.number());
    };

    let setTable = ()=>{
        UICrtl.setTable(BCrtl.garTable("saman",BCrtl.number()))
    }

    return{
        init : ()=>{
            console.log(`Application has started.`);
            UICrtl.date(BCrtl.number());
            setupEventListeners();
            
        }
    }
})(UIcontroller,BusinessController);

controller.init();
















