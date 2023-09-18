import { Obra } from 'src/app/model/obra';
export class AquisicaoObra {
  serId!: number;
  id!: number;
  obraId!: number;
  produto!: string;
  valor!: number;
  fornecedorId!: number;
  categoria!: string;
  fase!: string;
  obra!: Obra;
}
