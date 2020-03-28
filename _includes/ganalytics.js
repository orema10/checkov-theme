

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', '{{ site.google_analytics }}'
         {% if site.google_analytics_anonymize_ip %}, { 'anonymize_ip': true } {% endif %});
