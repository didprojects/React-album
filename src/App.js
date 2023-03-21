import logo from './logo.svg';
import './App.css';
import ShowImages from './ShowImages';

function App() {

  const pets = [
    "https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/10/31/14/55/rottweiler-1785760_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/10/15/12/01/dog-1742295_1280.jpg"
];
  const beaches = [
    "https://lp-cms-production.imgix.net/2021-07/Waya_Island_Fiji.jpg?auto=format&q=75&w=3840",
    "https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-1920-80.jpg.webp",
    "https://www.scti.co.nz/-/media/project/scti/nz/images/travel-advice/fijis-best-beaches/fijis-best-beaches-musket-cove-malolo-lailai-900x675.jpg",
    "https://lp-cms-production.imgix.net/2022-03/GettyImages-1022108932.jpg?auto=format&q=75&w=3840",
    "https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2021/05/2c4j3en-e1625485939998.jpg"
  ];

  const foods = [
    "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/769969/pexels-photo-769969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
];

  return (
    <div className="App">
      <header className="app-header">
        <h2 className='header-content'>My Albums</h2>
      </header>
      <div>
        <ShowImages pets={pets} beaches={beaches} foods={foods}/>
      </div>
    </div>
  );
}

export default App;
