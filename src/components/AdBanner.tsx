// 300x250 banner (highrevenueformat). Raw HTML required: invoke.js uses document.currentScript.
export default function AdBanner() {
  return (
    <div className="flex justify-center my-8" style={{ minHeight: 250 }}>
      <div
        dangerouslySetInnerHTML={{
          __html: `<script>
  atOptions = {
    'key' : 'c39cd12d405d2973f808c3e9f09fdc8d',
    'format' : 'iframe',
    'height' : 250,
    'width' : 300,
    'params' : {}
  };
</script>
<script src="https://www.highrevenueformat.com/c39cd12d405d2973f808c3e9f09fdc8d/invoke.js"></script>`,
        }}
      />
    </div>
  );
}
