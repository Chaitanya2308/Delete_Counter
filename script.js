const root=document.getElementById("root")

let Counter = () => {
    const [counters, setCounters] = React.useState([0]);

    const increment = (index) => {
        setCounters(counters.map((ele, idx) => (idx === index ? ele + 1 : ele)));
    };

    const deleteCounter = (index) => {
        setCounters(counters.filter((ele, idx) => idx !== index));
    };

    const addCounter = () => {
        setCounters(counters.concat([0]));
    };

    return (
    <div>
    <button className=" col btn btn-primary text-center" onClick={addCounter}>
        Add Counter
    </button>
        <div className="row text-center">
            {counters.map((element, index) => {
            return (
                <div className="col-lg-6 border" key={index}>
                    <h1>{element}</h1>
                    <div className="row">
                        <div className="col-6"><button className="btn btn-success" onClick={() => increment(index)}>
                                Increment
                        </button>
                            </div>
                            <div className="col-6"><button className="btn btn-danger " onClick={() => deleteCounter(index)}>
                                Delete
                        </button>
                            </div>
                        </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};


let App = () => {
    return (
        <div>
         <Counter /> 
        </div>
    );
};

ReactDOM.render(<App/>,root)