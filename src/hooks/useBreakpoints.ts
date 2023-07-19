import { useMediaQuery } from 'react-responsive';

const useBreakpoints = () => {
  const moBreakpoint = useMediaQuery({ maxWidth: 479 });
  const xsBreakpoint = useMediaQuery({ minWidth: 480 });
  const smBreakpoint = useMediaQuery({ minWidth: 640 });
  const mdBreakpoint = useMediaQuery({ minWidth: 768 });
  const lgBreakpoint = useMediaQuery({ minWidth: 1024 });
  const xlBreakpoint = useMediaQuery({ minWidth: 1280 });
  const xxlBreakpoint = useMediaQuery({ minWidth: 1536 });
  const xxxlBreakpoint = useMediaQuery({ minWidth: 1680 });

  return {
    moBreakpoint,
    xsBreakpoint,
    smBreakpoint,
    mdBreakpoint,
    lgBreakpoint,
    xlBreakpoint,
    xxlBreakpoint,
    xxxlBreakpoint
  };
};

export default useBreakpoints;
