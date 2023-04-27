import { TitleSectionCheckout } from '../../../../styles/global'
import { CardCartCoffes } from './CardCartCoffees'
import {
  ButtonConfirmed,
  FooterSelectedCafes,
  SelectedCafesContainer,
  SelectedCafesContent,
  TextFooterSelectedCafes,
} from './style'

export function SelectedCafes() {
  return (
    <SelectedCafesContainer>
      <TitleSectionCheckout>Cafés selecionados </TitleSectionCheckout>
      <SelectedCafesContent>
        <CardCartCoffes />
        <CardCartCoffes />
        <TextFooterSelectedCafes>
          <div>
            <p>Total de itens</p>
            <p>Entrega</p>
            <p>
              <b>Total</b>
            </p>
          </div>
          <div>
            <p>R$ 29,70</p>
            <p>R$ 3,50</p>
            <p>
              <b>R$ 33,20</b>
            </p>
          </div>
        </TextFooterSelectedCafes>
        <ButtonConfirmed>CONFIRMAR PEDIDO</ButtonConfirmed>
      </SelectedCafesContent>
    </SelectedCafesContainer>
  )
}
