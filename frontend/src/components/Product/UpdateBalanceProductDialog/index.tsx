import { useForm } from "react-hook-form";
import { useDialog } from "react-st-modal";
import { updateBalanceProduct } from "../../../services/api.js";
import "../UpdateBalanceProductDialog/styles.css";
import { Product } from "../../../types/product.js";
import { toast } from "react-toastify";

type Props = {
  product: Product;
};

type Inputs = {
  id: number;
  amount: number;
  transactionType: string;
};

export function UpdateBalanceProductDialogModal({ product }: Props) {
  const refreshPage = () => {
    window.location.reload();
  };

  const dialog = useDialog();

  const { register, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      id: product.id,
      amount: 0,
      transactionType: "",
    },
  });

  const onSubmit = (data: Inputs) => {
    JSON.stringify(data);

    if (data.transactionType === "1") {
      data.amount = Number(product.amount) + Number(data.amount);
    } else {
      data.amount = Number(product.amount) - Number(data.amount);
    }

    updateBalanceProduct(data)
      .then(() => {
        toast.success("Saldo atualizado sucesso!", {
          position: "top-right",
          onClose: () => refreshPage(),
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch(() => {
        toast.error("Erro não atualizar o saldo!", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .finally(() => {
        dialog.close();
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-signin ">
      <div className="mb-3">
        <div className="form-group">
          <label className="form-label">
            <h4>
              {product.name}
            </h4>
			      <h5>
              Saldo: {product.amount} unidades
            </h5>
          </label>
        </div>
      </div>

      <div className="mb-3">
        <div className="form-group md-2">
          <label className="form-label">Selecione - Entrada ou saída</label>
          <select
            id="transactionType"
            className="form-control"
            {...register("transactionType")}
            placeholder="Selecione..."
          >
            <option value="1">Entrada no saldo (+)</option>
            <option value="2">Saída no saldo (-)</option>
          </select>
        </div>
      </div>

      <div className="mb-3">
        <div className="form-group mb-2">
          <label htmlFor="amount" className="form-label">
            Valor da transação
          </label>
          <input
            className="form-control"
            type="number"
            {...register("amount")}
            placeholder="Valor..."
            required
          />
        </div>
      </div>

      <div className="mb-3">
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-check-circle"
                viewBox="0 0 20 20"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
              </svg>
            }
            Salvar
          </button>
        </div>
      </div>

    </form>
  );
}
