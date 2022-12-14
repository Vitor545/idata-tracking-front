import { useState } from "react";
import Joi from "joi";
import { toast } from "react-toastify";
import { createTracking } from "../libs/api";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

const schemaInputNumber = Joi.object({
  inputNumber: Joi.string().min(8).required(),
});

const schemaInputPrefix = Joi.object({
  inputPrefix: Joi.string().min(3).required(),
});

export default function Form() {
  const [inputNumber, setInputNumber] = useState("");
  const [inputPrefix, setInputPrefix] = useState("");
  const [inputNumberMensage, setInputNumberMensage] = useState("false");
  const [inputPrefixMensage, setInputPrefixMensage] = useState("false");
  const [inputNumberClass, setInputNumberClass] = useState("normal");
  const [inputPrefixClass, setInputPrefixClass] = useState("normal");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  if (isLoading) {
    return <Loading />;
  }

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

  const onClick = async () => {
    validaStyleInputNumber(inputNumber);
    validaStyleInputPrefix(inputPrefix);
    if (validationErrorInputNumber || validationErrorInputPrefix) {
      toast.error("Algum campo est?? errado, ou companhia ainda n??o aceita :(", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        theme: "dark",
        draggable: true,
        progress: undefined,
      });
      return;
    }
    setIsLoading(true);
    const result = await createTracking(inputPrefix, inputNumber);
    setIsLoading(false);
    if (!result) {
      toast.error("Algum campo est?? errado, ou companhia ainda n??o aceita :(", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        theme: "dark",
        draggable: true,
        progress: undefined,
      });
      setInputNumberClass("normal");
      setInputPrefixClass("normal");
      return;
    }
    navigate(`/tracking/${result.awb}`);
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
                Basta informar seu c??digo nos campos abaixo e clicar em enviar
                <br />
                Atualmente aceitamos apenas{" "}
                <span style={{ color: "#F68832" }}>LATAM</span> e{" "}
                <span style={{ color: "#F68832" }}>UNITED</span>
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
                  data-testid="input_prefix"
                  onKeyPress={(e: any) => onlynumber(e)}
                  className={classInput[inputPrefixClass]}
                />
                <span style={{ display: isMensage[inputPrefixMensage] }}>
                  O prefixo deve ter 3 d??gitos
                </span>
              </label>
              <label htmlFor="input_number">
                N??mero
                <input
                  type="text"
                  id="input_number"
                  onChange={onChange}
                  data-testid="input_number"
                  maxLength={8}
                  onKeyPress={(e: any) => onlynumber(e)}
                  className={classInput[inputNumberClass]}
                />
                <span style={{ display: isMensage[inputNumberMensage] }}>
                  O n??mero deve ter 8 d??gitos
                </span>
              </label>
            </div>
            <div className="button_form_create">
              <button
                onClick={onClick}
                className="btn"
                data-testid="button_form_create"
              >
                Rastrear
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
