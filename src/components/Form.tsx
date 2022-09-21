import { useState } from "react";
import Joi from "joi";
import { toast } from "react-toastify";

const schemaInputNumber = Joi.object({
  inputNumber: Joi.string().min(8).required(),
});

const schemaInputPrefix = Joi.object({
  inputPrefix: Joi.string().min(3).required(),
});

export default function FormCreate() {
  const [inputNumber, setInputNumber] = useState("");
  const [inputPrefix, setInputPrefix] = useState("");
  const [inputNumberMensage, setInputNumberMensage] = useState("false");
  const [inputPrefixMensage, setInputPrefixMensage] = useState("false");
  const [inputNumberClass, setInputNumberClass] = useState("normal");
  const [inputPrefixClass, setInputPrefixClass] = useState("normal");

  const isMensage: any = { true: "block", false: "none" };
  const classInput: any = {
    error: "error_input",
    sucess: "sucess_input",
    normal: "normal_input",
  };
  const validationErrorInputNumber: any = schemaInputNumber.validate({
    inputNumber,
  }).error;
  const validationErrorInputPrefix: any = schemaInputPrefix.validate({
    inputPrefix,
  }).error;

  const validaStyleInputNumber = (value: any) => {
    if (schemaInputNumber.validate({ inputNumber: value }).error) {
      setInputNumberClass("error");
      setInputNumberMensage("true");
    } else {
      setInputNumberClass("sucess");
      setInputNumberMensage("false");
    }
  };

  const validaStyleInputPrefix = (value: any) => {
    if (schemaInputPrefix.validate({ inputPrefix: value }).error) {
      setInputPrefixClass("error");
      setInputPrefixMensage("true");
    } else {
      setInputPrefixClass("sucess");
      setInputPrefixMensage("false");
    }
  };

  const onlynumber = (evt: any) => {
    const theEvent = evt || window.event;
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    const regex = /^[0-9]+$/;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  };

  const onChange = ({ target }: any) => {
    const value = target.value;
    if (target.id === "input_number") {
      setInputNumber(value);
      validaStyleInputNumber(value);
    }
    if (target.id === "input_prefix") {
      setInputPrefix(value);
      validaStyleInputPrefix(value);
    }
  };

  const onClick = () => {
    validaStyleInputNumber(inputNumber);
    validaStyleInputPrefix(inputPrefix);
    if (validationErrorInputNumber || validationErrorInputPrefix) {
      console.log(validationErrorInputPrefix);
      return;
    }
    console.log("sucess");
  };

  return (
    <section className="form_create">
      <div className="container form_create_container">
        <div>
          <form
            action=""
            onSubmit={(e) => e.preventDefault()}
            className="form_create_main"
          >
            <div className="form_create_header">
              <h2>Rastreio por AWB</h2>
              <p>
                Basta informar seu código nos campos abaixo e clicar em enviar
                <br />
                Atualmente aceitamos apenas LATAM e UNITED
              </p>
            </div>
            <div className="form_create_labels">
              <label htmlFor="input_prefix">
                Prefixo
                <input
                  type="text"
                  id="input_prefix"
                  onChange={onChange}
                  maxLength={3}
                  onKeyPress={(e: any) => onlynumber(e)}
                  className={classInput[inputPrefixClass]}
                />
                <span style={{ display: isMensage[inputPrefixMensage] }}>
                  O prefixo deve ter 3 dígitos
                </span>
              </label>
              <label htmlFor="input_number">
                Número
                <input
                  type="text"
                  id="input_number"
                  onChange={onChange}
                  maxLength={8}
                  onKeyPress={(e: any) => onlynumber(e)}
                  className={classInput[inputNumberClass]}
                />
                <span style={{ display: isMensage[inputNumberMensage] }}>
                  O número deve ter 8 dígitos
                </span>
              </label>
            </div>
            <div className="button_form_create">
              <button onClick={onClick} className="btn">
                Rastrear
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
