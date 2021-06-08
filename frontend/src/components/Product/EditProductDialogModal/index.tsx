import { useForm } from "react-hook-form";
import { useDialog } from "react-st-modal";
import { toast } from "react-toastify";
import { Product } from "types/product";
import { refreshPage } from "utils/helpers";
import { editProduct } from "../../../services/api";

type Props = {
  product: Product;
};

type Inputs = {
  id: number;
  name: string;
  amount: number;
  description: string;
  imageUri: string;
};

export function EditProductDialogModal({ product }: Props) {
  const dialog = useDialog();

  const { register, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      id: product.id,
      name: product.name,
      amount: product.amount,
      description: product.description,
      imageUri: product.imageUri,
    },
  });

  const onSubmit = (data: Inputs) => {
    JSON.stringify(data);

    editProduct(data)
      .then(() => {
        toast.success("Produto editado com sucesso!", {
          position: "top-right",
          onClose: (props) => refreshPage(),
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch(() => {
        toast.error("Produto não editado!", {
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
    <form onSubmit={handleSubmit(onSubmit)} className="form-signin">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nome do produto
        </label>
        <input
          className="form-control"
          type="text"
          {...register("name")}
          placeholder="Nome..."
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Descrição do produto
        </label>
        <input
          className="form-control"
          type="text"
          {...register("description")}
          placeholder="Descrição..."
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="imageUri" className="form-label">
          Foto do Produto (PNG, JPG)
        </label>
        <input
          className="form-control"
          type="text"
          accept="image/png, image/jpeg,  image/jpg"
          {...register("imageUri")}
          placeholder="Foto..."
          required
        />
      </div>

      <div className="mb-3">
        <div className="text-center p-2 md-2">
          <button type="submit" className="btn btn-success">
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
