import styled from '@emotion/styled';
import { Grid, GridItem, Box, Flex } from '@chakra-ui/react';
import { Header } from '@/components/Mail/Header';
import { useState } from 'react';
import { AskList } from '@/components/Mail/AskList';
import { useMail } from '@/Provider/MailContext';

export const MailPage = () => {
  const [isActive, setIsActive] = useState(false);
  const mailContext = useMail();

  if (!mailContext) {
    throw new Error('MailContext not found');
  }
  const { mailInput } = mailContext;

  console.log(mailInput);

  const onIsActive = () => {
    setIsActive(!isActive);
  };

  return (
    <Wrapper>
      <LogoWrapper>
        <ContentWrapper>
          <StyledGrid>
            <StyledGridItem className="empty"></StyledGridItem>
            <StyledGridItem className="header">
              <Header isActive={isActive} onIsActive={onIsActive}></Header>
            </StyledGridItem>
            <StyledGridItem className="content">
              <InnerGrid>
                <InnerGridItem className="ask-list">
                  <AskList randomInput={mailInput}></AskList>
                </InnerGridItem>
                <InnerGridItem className="image-column">
                  <img src="/images/mailEnter.svg" alt="Enter Key" />
                  <img src="/images/mailSkip.svg" alt="Skip" />
                  <img src="/images/mailUse.svg" alt="Info" />
                </InnerGridItem>
              </InnerGrid>
            </StyledGridItem>
          </StyledGrid>
        </ContentWrapper>
      </LogoWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  height: auto;
  align-items: center;
  justify-content: center;
`;

const LogoWrapper = styled(Box)`
  width: 100%;
  max-width: 1200px;
`;

const ContentWrapper = styled(Box)`
  width: 100%;
  height: 768px;
  background: #fff;
`;

const StyledGrid = styled(Grid)`
  width: 100%;
  height: 100%;
  grid-template-rows: 106px 80px 582px;
  grid-template-columns: repeat(1, 1fr);
`;

const StyledGridItem = styled(GridItem)`
  &.empty {
    grid-row: span 1;
  }

  &.header {
    grid-row: span 1;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  &.content {
    grid-row: span 1;
  }
`;

const InnerGrid = styled(Grid)`
  width: 100%;
  height: 100%;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(3, 1fr);
`;

const InnerGridItem = styled(GridItem)`
  &.ask-list {
    grid-column: span 2;
  }

  &.image-column {
    grid-column: span 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    margin-right: 56px;
    margin-bottom: 25px;
    margin-top: 25px;
    margin-left: -70px;
  }
`;
