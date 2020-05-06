import React, { useContext } from "react"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"

import Context from "../store/context"
import Layout from "../components/Layout"

const IndexPage = () => {
  const { state, dispatch } = useContext(Context)
  const theme = useTheme()

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
      </div>
    </Layout>
  )
}

export default IndexPage
