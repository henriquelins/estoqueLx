/* eslint-disable jsx-a11y/anchor-is-valid */
import '../Header/styles.css';

const HeaderSearch = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
				<ul className="navbar-nav me-auto mb-2 mb-md-0">
					<h2 className="text-content">Estoque LX</h2>
				</ul>
        
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
				<form className="d-flex"> 
					<input
						className="form-control me-2"
						type="pesquisar"
						placeholder="Pesquisar"
						aria-label="Pesquisar"
					/>
					<button className="btn btn-outline-success" type="submit">
						Pesquisar
					</button>
				</form>
				</ul>
				
        <ul className="navbar-nav me-4 mb-2 mb-md-0">
        
        <button className="btn btn-outline-success" type="submit">
						Novo Produto
					</button>
        </ul>
				
			</nav>
		</div>
	);
};

export default HeaderSearch;
