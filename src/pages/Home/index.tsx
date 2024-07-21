import { Header } from "@/components/Layout/Header"
import { Contents } from "@/components/HomePage/Contents"
import styled from "@emotion/styled"

export const HomePage = () => {
  return (
    <Wrapper>
      <Header />
      <Contents />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: radial-gradient(50% 50% at 75% 25%, #d8edfd 0%, rgba(216, 237, 253, 0) 100%),
    radial-gradient(50% 50% at 25% 25%, #dee2fd 0%, rgba(230, 233, 255, 0) 100%),
    linear-gradient(180deg, #e5efff 0%, #fff 100%);
`
