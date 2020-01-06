import React from 'react';

const Form = props => (
    <div className="form">
        <form onSubmit={props.getWeather}>
            <input type="text" name="city" className="input" placeholder="City..."/>
            <input type="text" name="country" className="input" placeholder="Country..."/>
            <button>Get Weather</button>
        </form>
    </div>
)

export default Form;