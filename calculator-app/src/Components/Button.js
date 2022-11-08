import React ,{useState} from 'react'

const Button = () => {
    const [Input, setInput] = useState("");
 
 const Addtocart=(event)=>{
  setInput(Input+event.target.value)
 }
 const clearScreen=()=>{
  setInput("")
 }
 const calculator=()=>[
  setInput(eval(Input))
 ]
  return (
    <div>
      <div className="display">
        <table>
          <tr>
            <td colspan="3">
              <input
                type="text"
                value={Input}
                id="result"
                className="screen"
              />
            </td>
            <td>
              <input
                type="button"
                value="C"
                onClick={clearScreen}
                class="clear"
              />
            </td>
          </tr>
        </table>

        <div className="operators">
          <button onClick={Addtocart} value="7">
            7
          </button>
          <button onClick={Addtocart} value="8">
            8
          </button>
          <button onClick={Addtocart} value="9">
            9
          </button>
          <button onClick={Addtocart} value="/">
            /
          </button>
          <button onClick={Addtocart} value="4">
            4
          </button>
          <button onClick={Addtocart} value="5">
            5
          </button>
          <button onClick={Addtocart} value="6">
            6
          </button>
          <button onClick={Addtocart} value="*">
            *
          </button>
          <button onClick={Addtocart} value="1">
            1
          </button>
          <button onClick={Addtocart} value="2">
            2
          </button>
          <button onClick={Addtocart} value="3">
            3
          </button>
          <button onClick={Addtocart} value="-">
            -
          </button>
          <button onClick={Addtocart} value="0">
            0
          </button>
          <button onClick={calculator} value="=">
            =
          </button>
          <button onClick={Addtocart} value=".">
            .
          </button>
          <button onClick={Addtocart} value="+">
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Button