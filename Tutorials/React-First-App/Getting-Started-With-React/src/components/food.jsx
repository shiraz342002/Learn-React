
  export default function ShoppingList() {
   const food1="orange";
   const food2="Banana";
   const food3="Orange"

    return (
      <ul>
        <li>{food1}</li>
        <li>{food2}</li>
        <li>{food3.toUpperCase()}</li>
      </ul>
    );
  }  