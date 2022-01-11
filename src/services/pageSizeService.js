import { throttle } from '../functions/throttle';

export const VH_PROPERTY_NAME = '--vh';
export const VW_PROPERTY_NAME = '--vw';

export const setPageSizeProps = () => {
  document.documentElement.style.setProperty(
    VH_PROPERTY_NAME,
    document.documentElement.clientHeight / 100 + 'px'
  );
  document.documentElement.style.setProperty(
    VW_PROPERTY_NAME,
    document.documentElement.clientWidth / 100 + 'px'
  );
};

export const resetPageSizeProps = () => {
  document.documentElement.style.removeProperty(VH_PROPERTY_NAME);
  document.documentElement.style.removeProperty(VW_PROPERTY_NAME);
};

export const observePageSize = throttle(setPageSizeProps, 200);
