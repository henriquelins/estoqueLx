import { AddProductDialogModal } from "components/Product/AddProductDialogModal";
import { CustomDialog } from "react-st-modal";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

 const HeaderSearch = () => {

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <Logo />
        </ul>

        <ul className="navbar-nav me-4 mb-2 mb-md-0">
          <button
            className="btn btn-primary"
            type="submit"
            onClick={async () => {
              await CustomDialog(<AddProductDialogModal />, {
                title: "Novo Produto",
              });
            }}
          >
            {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-box-seam"
                viewBox="0 0 20 20"
              >
                <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
              </svg>
            }
            Novo Produto
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderSearch;
