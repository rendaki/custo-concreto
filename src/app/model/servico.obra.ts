import { Obra } from 'src/app/model/obra';
export class ServicoObra {
  userId!: number;
  id!: number;
  obraId!: number;
  servico!: string;
  valor!: number;
  fornecedorId!: number;
  categoria!: string;
  fase!: string;
  obra!: Obra;
}
