import React from "react";
import { Textbox } from "./Textbox";

function Todolist() {
    return (
        <div className="container-fluid bg-green vh-90" id="todolist">
            <section>
                <h3 className="text-center">To do list</h3>
                <Textbox className="mr-10 ml-10"/>
            </section>
        </div>
    )
}

export default Todolist;