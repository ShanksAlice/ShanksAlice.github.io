/**
 * Created by huangling on 16/5/2017.
 */
export default ({body, title}) => (`
  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">
        <title>${title}</title>
        <link rel="stylesheet" href="style/index.css" /> 
        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        
          ga('create', 'UA-76633300-1', 'auto');
          ga('send', 'pageview');
        </script>
        <script type="text/javascript" src="http://host.convertlab.com/js/forms/form.js"></script>
        <script type="text/javascript" src="https://hm.baidu.com/hm.js?f039e7b9ae45de69f8a695acea6993ee"></script>
        <script type="text/javascript" src="//cbe.convertlab.com/cbe/collect?tid=1238467299&at=0&h=web"></script>
        <link rel="icon" type="image/png" href="http://static.91convert.com/site/convertlab.ico" sizes="16x16"/>
    
        <img alt='Convertlab' title='Convertlab-logo' href="/assets/logo.jpg" sizes="121x75" 
            style="opacity: 0; position: absolute;"/>
    </head>
    <body>
      <div id="root">${body}</div>
      <div id="layer"></div>
    </body>
    <script type="text/javascript" src="/assets/bundle.js"></script>
    <script>
        _cl_tracker.ready(function(){
          this.push({});
          this.track("open_page", {});
        });
    </script>
  </html>
`);
