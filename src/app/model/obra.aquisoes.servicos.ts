import { Servico } from './servico';
import { Aquisicao } from './aquisicao';
export class ObraAquisoesServicos {
  userId!: number;
  id!: number;
  identificador!: string;
  endereco!: string;
  area!: number;
  categoria!: string;
  metodo!:string;
  tipo_teto_laje!:boolean;
  tipo_teto_forro_pvc!:boolean;
  tipo_teto_forro_gesso!:boolean;
  tipo_teto_forro_drywall!:boolean;
  tipo_teto_forro_madeira!:boolean;
  aquisicoes!: Aquisicao[];
  servicos!: Servico[];
}
