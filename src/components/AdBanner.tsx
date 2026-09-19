// iframe banner (highrevenueformat). Raw HTML required: invoke.js uses document.currentScript.
// Default: 300x250. Pass adKey/size for other formats.
interface Props {
  adKey?: string;
  width?: number;
  height?: number;
}

export default function AdBanner({ adKey = 'c39cd12d405d2973f808c3e9f09fdc8d', width = 300, height = 250 }: Props) {
  return (
    <div className="flex justify-center my-8 max-w-full overflow-hidden" style={{ minHeight: height }}>
      <div
        dangerouslySetInnerHTML={{
          __html: `<script>
  atOptions = {
    'key' : '${adKey}',
    'format' : 'iframe',
    'height' : ${height},
    'width' : ${width},
    'params' : {}
  };
</script>
<script src="https://www.highrevenueformat.com/${adKey}/invoke.js"></script>`,
        }}
      />
    </div>
  );
}
