class MyGlobalState {


  constructor(key) {
    this.key = key;    
  }
  // Getter
  get item() {
    return this.convertToObj();
  }

  set setItem(value) {
   // this.log.push(name);
    localStorage.setItem(this.key, JSON.stringify(value));
  }
  // Method
  convertToObj() {
    //return this.height * this.width;
    return  JSON.parse(localStorage.getItem(this.key));
  }

  clear(){
    localStorage.clear();
  }
}



//const square = new Rectangle(10, 10);
//console.log(square.area); // 100


export default MyGlobalState;


//export  const GlobalName = "Hello world";


//export default message;



/* class GlobalState {


    const name = 'Wale';
    

  constructor(key, value) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}
 */


/* const [items, setItems] = useState([]);

useEffect(() => {
  localStorage.setItem('items', JSON.stringify(items));
}, [items]);

localStorage.setItem('items', JSON.stringify(items));

const [items, setItems] = useState([]);

useEffect(() => {
  const items = JSON.parse(localStorage.getItem('items'));
  if (items) {
   setItems(items);
  }
}, []); */