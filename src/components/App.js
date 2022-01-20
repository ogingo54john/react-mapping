import "../styles.css";
import Activitypedia from "./Activitypedia";
import Entry from "./Entry";

//create a function that will take single entries from activitypedia
function createEntry(activityTerm){
  return <Entry 
  key={activityTerm.id}
  name={activityTerm.name}
  location={activityTerm.location}
  time={activityTerm.time}
  description={activityTerm.description}
  
  />
}

export default function App() {
  return (
    <div className="App">
     <span  className="head1"> <h1>15 January 2022</h1> </span>
      <dl>{Activitypedia.map(createEntry)}</dl>
      
    </div>
  );
}
