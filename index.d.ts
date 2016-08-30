interface decode {
  /**
   * HTML Decode
   *
   * @param str The content you want to HTML decode.
   */
  (str: string): string;
}

interface encode {
  /**
   * HTML Encode
   *
   * @param str The content you want to HTML encode.
   */
  (str: string): string;
}

export var htmlEncode: encode;
export var htmlDecode: decode;
