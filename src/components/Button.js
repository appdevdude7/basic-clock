import React from 'react'

const Button = () => {
    return (
        <div className="row">
            <div className="col-sm-5">
                <button type="button" class="btn btn-toggle active" data-toggle="button" aria-pressed="true" autocomplete="off">
                    <div className="handle"></div>
                </button>
            </div>
            <div className="panel">                        
                        <label id="date-switch" className="switch">
                            <input type="checkbox" checked={true} />
                            <span className="slider round"></span>
                        </label>
                        <label className="panel-switch-text" htmlFor="date-switch">
                            <i className="fa fa-calendar"></i>
                        </label>
                    </div>
        </div>
    )
}

export default Button
