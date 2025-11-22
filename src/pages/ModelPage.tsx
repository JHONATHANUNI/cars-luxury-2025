import { useParams } from "react-router-dom";
import marcas from "../data/marcas.json";
import Modelo3D from "../components/Modelo3D";

export default function ModelPage() {
  const { marcaId, modeloId } = useParams();

  // 1. Buscar la marca
  const marca = marcas.find((m) => m.id === marcaId);
  if (!marca) return <h2>Marca no encontrada</h2>;

  // 2. Buscar el modelo dentro de la marca
  const modelo = marca.modelos.find((mod) => mod.id === modeloId);
  if (!modelo) return <h2>Modelo no encontrado</h2>;

  return (
    <div className="model-container">
      <h1 className="model-title">{modelo.nombre}</h1>
      <p className="model-price">{modelo.precio}</p>

      <div className="model-img-box">
        <img src={modelo.imagen} alt={modelo.nombre} />
      </div>

      <p className="model-description">{modelo.descripcion}</p>

      <h2 className="model-subtitle">Vista 3D (Próximamente)</h2>


      <div className="model-3d-box">
      <Modelo3D file={`/models/${modelo.id}.glb`} />      </div>


    </div>
  );
}
