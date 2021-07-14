import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, IconsGrid, ContentWrapper, Center } from './IconGrid.styles';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import { H1 } from 'components/atoms/Headings/Headings';
import IconTemplate from 'components/atoms/IconTemplate/IconTemplate';
import { SWMIconProvider } from 'react-swm-icon-pack';
import { useIcons } from 'hooks/useIcons';
import { useSearch } from 'hooks/useSearch';
import { ReactComponent as AmigoIcon } from 'assets/icons/amigo.svg';

const IconGrid = ({ handleOpen }) => {
  const { activeSet, setActiveIcon } = useIcons();
  const { results } = useSearch();

  if (!results.length)
    return (
      <Wrapper>
        <ContentWrapper>
          <Center>
            <AmigoIcon />
            <H1>Ay, caramba!</H1>
            <Paragraph isLarge>We couldn’t find such an icon, amigo. Try different filters or check spelling in search.</Paragraph>
          </Center>
        </ContentWrapper>
      </Wrapper>
    );

  return (
    <Wrapper>
      <Paragraph isLarge isMedium>
        {results.length > 1 ? `${results.length} icons found` : `${results.length} icon found`}
      </Paragraph>
      <IconsGrid>
        <SWMIconProvider size="80" set={activeSet.toLowerCase()}>
          {results.map((icon) => (
            <IconTemplate
              Icon={icon.Icon}
              name={icon.name}
              key={icon.name}
              onClick={() => {
                handleOpen();
                setActiveIcon(icon);
              }}
            />
          ))}
        </SWMIconProvider>
      </IconsGrid>
    </Wrapper>
  );
};

IconGrid.propTypes = {
  handleOpen: PropTypes.func,
};

export default IconGrid;
