import React, { useContext } from "react"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"

import Context from "../store/context"
import Layout from "../components/Layout"

const IndexPage = () => {
  const { state, dispatch } = useContext(Context)
  const theme = useTheme()

  const renderPaypal = () => {
    paypal.Buttons({
      style: {
          shape: 'pill',
          color: 'gold',
          layout: 'horizontal',
          label: 'pay',
          tagline: true
      },
      createOrder: function(data, actions) {
          return actions.order.create({
              purchase_units: [{
                  amount: {
                      value: '10'
                  }
              }]
          });
      },
      onApprove: function(data, actions) {
          return actions.order.capture().then(function(details) {
              alert('Transaction completed by ' + details.payer.name.given_name + '!');
          });
      }
  }).render('#paypal-button-container');
  }

  return (
    <Layout>
      <div
        css={css`
          h1,
          h2 {
            color: ${state.isDark ? theme.dark.font : theme.light.font};
          }
        `}
      >
        <h1>Hello David</h1>
        <button onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })}>
          Switch
        </button>
        <h2>Dark mode id {state.isDark ? "on" : "off"}</h2>
        <div id="paypal-button-container"></div>
        <script src="https://www.paypal.com/sdk/js?client-id=sb&currency=USD" data-sdk-integration-source="button-factory"></script>
        {renderPaypal()}
      </div>
    </Layout>
  )
}

export default IndexPage
