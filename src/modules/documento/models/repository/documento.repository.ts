import { AppDataSource } from "src/database/data-source";
import Documento from "../entities/documento.entity";

const  DocumentoRepository = AppDataSource.getRepository(Documento);
export default DocumentoRepository;