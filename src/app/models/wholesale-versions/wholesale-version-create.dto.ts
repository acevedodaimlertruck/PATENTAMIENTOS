export interface WholesaleVersionCreateDto {
  id: string;
  mercedesMarcaId?: string;
  carModelId: string;
  mercedesModeloId?: string;
  mercedesTerminalId?: string;
  version?: string;
  description?: string;
  codName?: string;
}