import './MainTitle.css'

const MainTitle = (props) => {
    return (
      <div className="title">
        <h1>{props.name}</h1>
      </div>
    );
}

export default MainTitle;