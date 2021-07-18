import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { saveAs } from 'file-saver';
import { Wrapper, ContainerWrapper, StyledButton, Header, ReactInput, Buttons } from './IconDetails.styles';
import { CrossCircle, Copy, Download } from 'react-swm-icon-pack';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import { H1, H3 } from 'components/atoms/Headings/Headings';
import Button from 'components/atoms/Button/Button';
import { useIcons } from 'hooks/useIcons';
import toast, { Toaster } from 'react-hot-toast';

const IconDetails = ({ handleClose }) => {
  const { activeSet, activeIcon } = useIcons();
  const ref = useRef(null);

  const snippetReact = activeIcon && `<${activeIcon.name[0].toUpperCase() + activeIcon.name.slice(1)} set="${activeSet.toLowerCase()}" />`;

  const handleCopySnippet = (e) => {
    navigator.clipboard?.writeText(snippetReact);
    toast.success(`Copied to clipboard`, {
      id: 'copy-snippet',
    });
  };
  const handleCopySVG = (e) => {
    ref.current && void navigator.clipboard?.writeText(ref.current.outerHTML);
    toast.success(`${activeSet.toLowerCase()}-${activeIcon.name} copied to clipboard`, {
      id: 'copy-svg',
    });
  };
  const handleDownloadSVG = (e) => {
    if (!ref.current?.outerHTML) return;
    const blob = new Blob([ref.current.outerHTML]);
    saveAs(blob, `${activeSet.toLowerCase()}-${activeIcon.name}.svg`);
  };

  if (!activeIcon) return null;

  return (
    <Wrapper>
      <Toaster />
      <activeIcon.Icon size={150} strokeWidth={'1px'} ref={ref} />
      <ContainerWrapper>
        <Header>
          <H1>{activeIcon.name}</H1>
          <H3>
            {' '}
            {activeSet} | {activeIcon.category}{' '}
          </H3>
        </Header>
        <ReactInput>
          <Paragraph isMedium>React component</Paragraph>
          <StyledButton onClick={(e) => handleCopySnippet(e)}>
            <Paragraph>{snippetReact}</Paragraph>
            <Copy />
          </StyledButton>
        </ReactInput>
        <Buttons>
          <Button Icon={Download} className="btn-download" onClick={(e) => handleDownloadSVG(e)}>
            Download SVG
          </Button>
          <Button isSecondary Icon={Copy} className="btn-copy" onClick={(e) => handleCopySVG(e)}>
            Copy SVG
          </Button>
        </Buttons>
      </ContainerWrapper>
      <div className="btn-close">
        <CrossCircle strokeWidth={1.5} onClick={handleClose} />
      </div>
    </Wrapper>
  );
};

IconDetails.propTypes = {
  handleClose: PropTypes.func,
};

export default IconDetails;
