import { useEffect } from "react";

const SITE_NAME = "ICSSETES-26 - ITS Engineering College";

export default function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  }, [title]);
}
