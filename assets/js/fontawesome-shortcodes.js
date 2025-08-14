// FontAwesome Icon Processor
document.addEventListener('DOMContentLoaded', function() {
    // Process menu items for FontAwesome icons
    function processFontAwesomeIcons() {
        // Process Linktree buttons for FontAwesome icons (icon + text)
        const linktreeButtons = document.querySelectorAll('.linktree-btn');
        
        console.log('Found Linktree buttons:', linktreeButtons.length);
        
        linktreeButtons.forEach(function(item, index) {
            const textContent = item.textContent.trim();
            const innerHTML = item.innerHTML;
            
            console.log(`Button ${index}:`, 'Text:', textContent, 'HTML:', innerHTML);
            
            // Store the original text for Linktree buttons
            const originalText = textContent;
            
            // Check if the text contains a FontAwesome shortcode [fa=icon-name]
            if (textContent.match(/\[fa=([^\]]+)\]/)) {
                const iconName = textContent.match(/\[fa=([^\]]+)\]/)[1];
                console.log('Processing shortcode:', iconName);
                
                // Check for custom icon mappings first
                if (iconName === 'n8n') {
                    // Create custom n8n icon using favicon
                    const icon = document.createElement('img');
                    icon.src = 'https://uploads.n8n.io/templates/logo-n8n-symbol-white.svg';
                    icon.alt = 'n8n';
                    icon.style.width = '1em';
                    icon.style.height = '1em';
                    icon.style.verticalAlign = 'middle';
                    
                    // Remove the shortcode from the text and add the icon before the remaining text
                    const textWithoutShortcode = originalText.replace(/\[fa=([^\]]+)\]/, '').trim();
                    console.log('Text without shortcode:', textWithoutShortcode);
                    
                    item.textContent = '';
                    item.appendChild(icon);
                    
                    // Add the remaining text after the icon
                    if (textWithoutShortcode) {
                        const textNode = document.createTextNode(' ' + textWithoutShortcode);
                        item.appendChild(textNode);
                        console.log('Added text node:', textWithoutShortcode);
                    }
                    return;
                }
                
                // Determine the appropriate FontAwesome class based on icon name
                let iconClass = 'fa-' + iconName;
                
                // Common brand icons that should use fa-brands
                const brandIcons = ['github', 'twitter', 'linkedin', 'instagram', 'youtube', 'facebook', 'discord', 'twitch', 'tiktok', 'snapchat', 'pinterest', 'reddit', 'telegram', 'whatsapp', 'slack', 'spotify', 'apple', 'google', 'microsoft', 'amazon', 'netflix', 'steam', 'paypal', 'stripe', 'wordpress', 'drupal', 'joomla', 'magento', 'shopify', 'woocommerce', 'squarespace', 'wix', 'webflow', 'figma', 'adobe', 'dropbox', 'google-drive', 'onedrive', 'icloud', 'aws', 'azure', 'digitalocean', 'heroku', 'vercel', 'netlify', 'cloudflare', 'stackoverflow', 'gitlab', 'bitbucket', 'npm', 'yarn', 'docker', 'kubernetes', 'jenkins', 'travis', 'circleci', 'github-actions', 'git', 'linux', 'ubuntu', 'centos', 'debian', 'fedora', 'arch', 'opensuse', 'freebsd', 'android', 'ios', 'windows', 'macos', 'chrome', 'firefox', 'safari', 'edge', 'opera', 'brave', 'vivaldi', 'tor', 'electron', 'react', 'vue', 'angular', 'node', 'python', 'java', 'php', 'ruby', 'go', 'rust', 'swift', 'kotlin', 'scala', 'r', 'matlab', 'julia', 'haskell', 'elixir', 'erlang', 'clojure', 'lisp', 'perl', 'bash', 'powershell', 'sql', 'mongodb', 'postgresql', 'mysql', 'sqlite', 'redis', 'elasticsearch', 'kafka', 'rabbitmq', 'nginx', 'apache', 'iis', 'tomcat', 'jetty', 'wildfly', 'glassfish', 'jboss', 'weblogic', 'websphere', 'oracle', 'ibm', 'intel', 'amd', 'nvidia', 'qualcomm', 'broadcom', 'cisco', 'juniper', 'arista', 'vmware', 'citrix', 'nutanix', 'dell', 'hp', 'lenovo', 'acer', 'asus', 'msi', 'razer', 'logitech', 'corsair', 'steelseries', 'roccat', 'hyperx', 'sennheiser', 'bose', 'sony', 'samsung', 'lg', 'panasonic', 'philips', 'sharp', 'toshiba', 'hitachi', 'fujitsu', 'nec', 'canon', 'nikon', 'sony', 'fujifilm', 'olympus', 'pentax', 'leica', 'gopro', 'dji', 'parrot', 'autel', 'yuneec', 'hubsan', 'syma', 'holy-stone', 'potensic', 'eachine', 'betafpv', 'emax', 't-motor', 'sunny-sky', 'scorpion', 'hacker', 'castle', 'kontronik', 'yge', 'spirit', 'vbar', 'ikon', 'beastx', 'skookum', 'vstabi', 'brain', 'spartan', 'align', 'sab', 'gaui', 'thunder-tiger', 'kyosho', 'hpi', 'traxxas', 'arrma', 'team-associated', 'losi', 'tamiya', 'hobbyking', 'banggood', 'aliexpress', 'amazon', 'ebay', 'etsy', 'redbubble', 'society6', 'teepublic', 'threadless', 'zazzle', 'cafepress', 'spreadshirt', 'printful', 'printify', 'shopify', 'woocommerce', 'bigcommerce', 'magento', 'prestashop', 'opencart', 'oscommerce', 'zen-cart', 'cubecart', 'x-cart', 'virtuemart', 'hikashop', 'redshop', 'eshop', 'easy-digital-downloads', 'give', 'charitable', 'woocommerce-subscriptions', 'woocommerce-memberships', 'woocommerce-bookings', 'woocommerce-product-vendors', 'woocommerce-affiliates', 'woocommerce-points-and-rewards', 'woocommerce-gift-cards', 'woocommerce-product-bundles', 'woocommerce-composite-products', 'woocommerce-chained-products', 'woocommerce-name-your-price', 'woocommerce-auctions', 'woocommerce-deposits', 'woocommerce-rental-and-booking', 'woocommerce-subscription-downloads', 'woocommerce-advanced-notifications', 'woocommerce-advanced-shipment-tracking', 'woocommerce-advanced-order-numbers', 'woocommerce-advanced-product-labels', 'woocommerce-advanced-product-fields', 'woocommerce-advanced-bulk-edit', 'woocommerce-advanced-notifications', 'woocommerce-advanced-shipment-tracking', 'woocommerce-advanced-order-numbers', 'woocommerce-advanced-product-labels', 'woocommerce-advanced-product-fields', 'woocommerce-advanced-bulk-edit', 'bluesky'];
                
                // Determine icon class based on brand list
                if (brandIcons.includes(iconName.toLowerCase())) {
                    iconClass = 'fa-brands fa-' + iconName;
                } else {
                    // Default to solid icons
                    iconClass = 'fa-solid fa-' + iconName;
                }
                
                // Create the icon element
                const icon = document.createElement('i');
                icon.className = iconClass;
                
                // Remove the shortcode from the text and add the icon before the remaining text
                const textWithoutShortcode = originalText.replace(/\[fa=([^\]]+)\]/, '').trim();
                console.log('Text without shortcode:', textWithoutShortcode);
                
                item.textContent = '';
                item.appendChild(icon);
                
                // Add the remaining text after the icon
                if (textWithoutShortcode) {
                    const textNode = document.createTextNode(' ' + textWithoutShortcode);
                    item.appendChild(textNode);
                    console.log('Added text node:', textWithoutShortcode);
                }
            }
            // Check if the text contains FontAwesome HTML (both encoded and non-encoded)
            else if (textContent.match(/<i class="([^"]+)"><\/i>/) || textContent.match(/&lt;i class="([^"]+)"&gt;&lt;\/i&gt;/)) {
                let iconClass;
                let textWithoutHTML;
                
                // Check for regular HTML first
                if (textContent.match(/<i class="([^"]+)"><\/i>/)) {
                    iconClass = textContent.match(/<i class="([^"]+)"><\/i>/)[1];
                    textWithoutHTML = originalText.replace(/<i class="([^"]+)"><\/i>/, '').trim();
                } else {
                    // Check for encoded HTML
                    iconClass = textContent.match(/&lt;i class="([^"]+)"&gt;&lt;\/i&gt;/)[1];
                    textWithoutHTML = originalText.replace(/&lt;i class="([^"]+)"&gt;&lt;\/i&gt;/, '').trim();
                }
                
                console.log('Processing HTML icon:', iconClass, 'Text without HTML:', textWithoutHTML);
                
                // Check for custom icon mappings first
                if (iconClass === 'fa-brands fa-n8n') {
                    // Create custom n8n icon using favicon
                    const icon = document.createElement('img');
                    icon.src = 'https://raw.githubusercontent.com/djangelic/journal/refs/heads/main/media/files/logo-n8n-symbol-white.ico';
                    icon.alt = 'n8n';
                    icon.style.width = '1em';
                    icon.style.height = '1em';
                    icon.style.verticalAlign = 'middle';
                    
                    // Clear content and add icon + text
                    item.textContent = '';
                    item.appendChild(icon);
                    
                    // Add the remaining text after the icon
                    if (textWithoutHTML) {
                        const textNode = document.createTextNode(' ' + textWithoutHTML);
                        item.appendChild(textNode);
                        console.log('Added text node for n8n:', textWithoutHTML);
                    }
                    return;
                }
                
                // Only process if it's a FontAwesome icon
                if (!iconClass.includes('fa-')) {
                    return;
                }
                
                // Create the icon element
                const icon = document.createElement('i');
                icon.className = iconClass;
                
                // Clear content and add icon + text
                item.textContent = '';
                item.appendChild(icon);
                
                // Add the remaining text after the icon
                if (textWithoutHTML) {
                    const textNode = document.createTextNode(' ' + textWithoutHTML);
                    item.appendChild(textNode);
                    console.log('Added text node for HTML:', textWithoutHTML);
                }
            }
            // Check if the innerHTML contains FontAwesome HTML (both encoded and non-encoded)
            else if (innerHTML.match(/<i class="([^"]+)"><\/i>/) || innerHTML.match(/&lt;i class="([^"]+)"&gt;&lt;\/i&gt;/)) {
                let iconClass;
                let textWithoutHTML;
                
                // Check for regular HTML first
                if (innerHTML.match(/<i class="([^"]+)"><\/i>/)) {
                    iconClass = innerHTML.match(/<i class="([^"]+)"><\/i>/)[1];
                    textWithoutHTML = originalText.replace(/<i class="([^"]+)"><\/i>/, '').trim();
                } else {
                    // Check for encoded HTML
                    iconClass = innerHTML.match(/&lt;i class="([^"]+)"&gt;&lt;\/i&gt;/)[1];
                    textWithoutHTML = originalText.replace(/&lt;i class="([^"]+)"&gt;&lt;\/i&gt;/, '').trim();
                }
                
                console.log('Processing innerHTML icon:', iconClass, 'Text without HTML:', textWithoutHTML);
                
                // Check for custom icon mappings first
                if (iconClass === 'fa-brands fa-n8n') {
                    // Create custom n8n icon using favicon
                    const icon = document.createElement('img');
                    icon.src = 'https://raw.githubusercontent.com/djangelic/journal/refs/heads/main/media/files/logo-n8n-symbol-white.ico';
                    icon.alt = 'n8n';
                    icon.style.width = '1em';
                    icon.style.height = '1em';
                    icon.style.verticalAlign = 'middle';
                    
                    // Clear content and add icon + text
                    item.textContent = '';
                    item.appendChild(icon);
                    
                    // Add the remaining text after the icon
                    if (textWithoutHTML) {
                        const textNode = document.createTextNode(' ' + textWithoutHTML);
                        item.appendChild(textNode);
                        console.log('Added text node for n8n (innerHTML):', textWithoutHTML);
                    }
                    return;
                }
                
                // Only process if it's a FontAwesome icon
                if (!iconClass.includes('fa-')) {
                    return;
                }
                
                // Create the icon element
                const icon = document.createElement('i');
                icon.className = iconClass;
                
                // Clear content and add icon + text
                item.textContent = '';
                item.appendChild(icon);
                
                // Add the remaining text after the icon
                if (textWithoutHTML) {
                    const textNode = document.createTextNode(' ' + textWithoutHTML);
                    item.appendChild(textNode);
                    console.log('Added text node for innerHTML:', textWithoutHTML);
                }
            } else {
                console.log('No shortcode or HTML found for button', index);
            }
        });
        
        // Process all other menu items (social media, main menu, etc.) for FontAwesome icons
        const allMenuItems = document.querySelectorAll('.navbar__menu a, .navbar__menu span, .follow a, .linktree-social-link');
        
        allMenuItems.forEach(function(item, index) {
            const textContent = item.textContent.trim();
            const innerHTML = item.innerHTML;
            
            // Store the original text for tooltips (before processing)
            const originalText = textContent;
            
            // Check if the text contains a FontAwesome shortcode [fa=icon-name]
            if (textContent.match(/\[fa=([^\]]+)\]/)) {
                const iconName = textContent.match(/\[fa=([^\]]+)\]/)[1];
                
                // Check for custom icon mappings first
                if (iconName === 'n8n') {
                    // Create custom n8n icon using favicon
                    const icon = document.createElement('img');
                    icon.src = 'https://raw.githubusercontent.com/djangelic/journal/refs/heads/main/media/files/logo-n8n-symbol-white.ico';
                    icon.alt = 'n8n';
                    icon.style.width = '1em';
                    icon.style.height = '1em';
                    icon.style.verticalAlign = 'middle';
                    
                    // For main menu items, preserve the span for tooltips but put icon outside span
                    if (item.classList.contains('tltp')) {
                        // Clear all content and add icon
                        item.innerHTML = '';
                        item.appendChild(icon);
                        
                        // Add span for tooltip text with the original text content
                        const span = document.createElement('span');
                        // Remove the shortcode from the original text for the tooltip
                        const tooltipText = originalText.replace(/\[fa=([^\]]+)\]/, '').trim();
                        span.textContent = tooltipText;
                        item.appendChild(span);
                    } else {
                        // For social links and other items, replace content entirely (icon only)
                        item.textContent = '';
                        item.appendChild(icon);
                    }
                    return;
                }
                
                // Determine the appropriate FontAwesome class based on icon name
                let iconClass = 'fa-' + iconName;
                
                // Common brand icons that should use fa-brands
                const brandIcons = ['github', 'twitter', 'linkedin', 'instagram', 'youtube', 'facebook', 'discord', 'twitch', 'tiktok', 'snapchat', 'pinterest', 'reddit', 'telegram', 'whatsapp', 'slack', 'spotify', 'apple', 'google', 'microsoft', 'amazon', 'netflix', 'steam', 'paypal', 'stripe', 'wordpress', 'drupal', 'joomla', 'magento', 'shopify', 'woocommerce', 'squarespace', 'wix', 'webflow', 'figma', 'adobe', 'dropbox', 'google-drive', 'onedrive', 'icloud', 'aws', 'azure', 'digitalocean', 'heroku', 'vercel', 'netlify', 'cloudflare', 'stackoverflow', 'gitlab', 'bitbucket', 'npm', 'yarn', 'docker', 'kubernetes', 'jenkins', 'travis', 'circleci', 'github-actions', 'git', 'linux', 'ubuntu', 'centos', 'debian', 'fedora', 'arch', 'opensuse', 'freebsd', 'android', 'ios', 'windows', 'macos', 'chrome', 'firefox', 'safari', 'edge', 'opera', 'brave', 'vivaldi', 'tor', 'electron', 'react', 'vue', 'angular', 'node', 'python', 'java', 'php', 'ruby', 'go', 'rust', 'swift', 'kotlin', 'scala', 'r', 'matlab', 'julia', 'haskell', 'elixir', 'erlang', 'clojure', 'lisp', 'perl', 'bash', 'powershell', 'sql', 'mongodb', 'postgresql', 'mysql', 'sqlite', 'redis', 'elasticsearch', 'kafka', 'rabbitmq', 'nginx', 'apache', 'iis', 'tomcat', 'jetty', 'wildfly', 'glassfish', 'jboss', 'weblogic', 'websphere', 'oracle', 'ibm', 'intel', 'amd', 'nvidia', 'qualcomm', 'broadcom', 'cisco', 'juniper', 'arista', 'vmware', 'citrix', 'nutanix', 'dell', 'hp', 'lenovo', 'acer', 'asus', 'msi', 'razer', 'logitech', 'corsair', 'steelseries', 'roccat', 'hyperx', 'sennheiser', 'bose', 'sony', 'samsung', 'lg', 'panasonic', 'philips', 'sharp', 'toshiba', 'hitachi', 'fujitsu', 'nec', 'canon', 'nikon', 'sony', 'fujifilm', 'olympus', 'pentax', 'leica', 'gopro', 'dji', 'parrot', 'autel', 'yuneec', 'hubsan', 'syma', 'holy-stone', 'potensic', 'eachine', 'betafpv', 'emax', 't-motor', 'sunny-sky', 'scorpion', 'hacker', 'castle', 'kontronik', 'yge', 'spirit', 'vbar', 'ikon', 'beastx', 'skookum', 'vstabi', 'brain', 'spartan', 'align', 'sab', 'gaui', 'thunder-tiger', 'kyosho', 'hpi', 'traxxas', 'arrma', 'team-associated', 'losi', 'tamiya', 'hobbyking', 'banggood', 'aliexpress', 'amazon', 'ebay', 'etsy', 'redbubble', 'society6', 'teepublic', 'threadless', 'zazzle', 'cafepress', 'spreadshirt', 'printful', 'printify', 'shopify', 'woocommerce', 'bigcommerce', 'magento', 'prestashop', 'opencart', 'oscommerce', 'zen-cart', 'cubecart', 'x-cart', 'virtuemart', 'hikashop', 'redshop', 'eshop', 'easy-digital-downloads', 'give', 'charitable', 'woocommerce-subscriptions', 'woocommerce-memberships', 'woocommerce-bookings', 'woocommerce-product-vendors', 'woocommerce-affiliates', 'woocommerce-points-and-rewards', 'woocommerce-gift-cards', 'woocommerce-product-bundles', 'woocommerce-composite-products', 'woocommerce-chained-products', 'woocommerce-name-your-price', 'woocommerce-auctions', 'woocommerce-deposits', 'woocommerce-rental-and-booking', 'woocommerce-subscription-downloads', 'woocommerce-advanced-notifications', 'woocommerce-advanced-shipment-tracking', 'woocommerce-advanced-order-numbers', 'woocommerce-advanced-product-labels', 'woocommerce-advanced-product-fields', 'woocommerce-advanced-bulk-edit', 'woocommerce-advanced-notifications', 'woocommerce-advanced-shipment-tracking', 'woocommerce-advanced-order-numbers', 'woocommerce-advanced-product-labels', 'woocommerce-advanced-product-fields', 'woocommerce-advanced-bulk-edit', 'bluesky'];
                
                // Determine icon class based on brand list
                if (brandIcons.includes(iconName.toLowerCase())) {
                    iconClass = 'fa-brands fa-' + iconName;
                } else {
                    // Default to solid icons
                    iconClass = 'fa-solid fa-' + iconName;
                }
                
                // Create the icon element
                const icon = document.createElement('i');
                icon.className = iconClass;
                
                // For main menu items, preserve the span for tooltips but put icon outside span
                if (item.classList.contains('tltp')) {
                    // Clear all content and add icon
                    item.innerHTML = '';
                    item.appendChild(icon);
                    
                    // Add span for tooltip text with the original text content
                    const span = document.createElement('span');
                    // Remove the shortcode from the original text for the tooltip
                    const tooltipText = originalText.replace(/\[fa=([^\]]+)\]/, '').trim();
                    span.textContent = tooltipText;
                    item.appendChild(span);
                } else {
                    // For social links and other items, replace content entirely (icon only)
                    item.textContent = '';
                    item.appendChild(icon);
                }
            }
            // Check if the text contains FontAwesome HTML (both encoded and non-encoded)
            else if (textContent.match(/<i class="([^"]+)"><\/i>/) || textContent.match(/&lt;i class="([^"]+)"&gt;&lt;\/i&gt;/)) {
                let iconClass;
                
                // Check for regular HTML first
                if (textContent.match(/<i class="([^"]+)"><\/i>/)) {
                    iconClass = textContent.match(/<i class="([^"]+)"><\/i>/)[1];
                } else {
                    // Check for encoded HTML
                    iconClass = textContent.match(/&lt;i class="([^"]+)"&gt;&lt;\/i&gt;/)[1];
                }
                
                // Check for custom icon mappings first
                if (iconClass === 'fa-brands fa-n8n') {
                    // Create custom n8n icon using favicon
                    const icon = document.createElement('img');
                    icon.src = 'https://raw.githubusercontent.com/djangelic/journal/refs/heads/main/media/files/logo-n8n-symbol-white.ico';
                    icon.alt = 'n8n';
                    icon.style.width = '1em';
                    icon.style.height = '1em';
                    icon.style.verticalAlign = 'middle';
                    
                    // For main menu items, preserve the span for tooltips but put icon outside span
                    if (item.classList.contains('tltp')) {
                        // Clear all content and add icon
                        item.innerHTML = '';
                        item.appendChild(icon);
                        
                        // Add span for tooltip text with the original text content
                        const span = document.createElement('span');
                        // Remove the HTML from the original text for the tooltip
                        const tooltipText = originalText.replace(/<i class="([^"]+)"><\/i>/, '').replace(/&lt;i class="([^"]+)"&gt;&lt;\/i&gt;/, '').trim();
                        span.textContent = tooltipText;
                        item.appendChild(span);
                    } else {
                        // For social links and other items, replace content entirely (icon only)
                        item.textContent = '';
                        item.appendChild(icon);
                    }
                    return;
                }
                
                // Only process if it's a FontAwesome icon
                if (!iconClass.includes('fa-')) {
                    return;
                }
                
                // Create the icon element
                const icon = document.createElement('i');
                icon.className = iconClass;
                
                // For main menu items, preserve the span for tooltips but put icon outside span
                if (item.classList.contains('tltp')) {
                    // Clear all content and add icon
                    item.innerHTML = '';
                    item.appendChild(icon);
                    
                    // Add span for tooltip text with the original text content
                    const span = document.createElement('span');
                    // Remove the HTML from the original text for the tooltip
                    const tooltipText = originalText.replace(/<i class="([^"]+)"><\/i>/, '').replace(/&lt;i class="([^"]+)"&gt;&lt;\/i&gt;/, '').trim();
                    span.textContent = tooltipText;
                    item.appendChild(span);
                } else {
                    // For social links and other items, replace content entirely (icon only)
                    item.textContent = '';
                    item.appendChild(icon);
                }
            }
            // Check if the innerHTML contains FontAwesome HTML (both encoded and non-encoded)
            else if (innerHTML.match(/<i class="([^"]+)"><\/i>/) || innerHTML.match(/&lt;i class="([^"]+)"&gt;&lt;\/i&gt;/)) {
                let iconClass;
                
                // Check for regular HTML first
                if (innerHTML.match(/<i class="([^"]+)"><\/i>/)) {
                    iconClass = innerHTML.match(/<i class="([^"]+)"><\/i>/)[1];
                } else {
                    // Check for encoded HTML
                    iconClass = innerHTML.match(/&lt;i class="([^"]+)"&gt;&lt;\/i&gt;/)[1];
                }
                
                // Check for custom icon mappings first
                if (iconClass === 'fa-brands fa-n8n') {
                    // Create custom n8n icon using favicon
                    const icon = document.createElement('img');
                    icon.src = 'https://raw.githubusercontent.com/djangelic/journal/refs/heads/main/media/files/logo-n8n-symbol-white.ico';
                    icon.alt = 'n8n';
                    icon.style.width = '1em';
                    icon.style.height = '1em';
                    icon.style.verticalAlign = 'middle';
                    
                    // For main menu items, preserve the span for tooltips but put icon outside span
                    if (item.classList.contains('tltp')) {
                        // Clear all content and add icon
                        item.innerHTML = '';
                        item.appendChild(icon);
                        
                        // Add span for tooltip text with the original text content
                        const span = document.createElement('span');
                        // Remove the HTML from the original text for the tooltip
                        const tooltipText = originalText.replace(/<i class="([^"]+)"><\/i>/, '').replace(/&lt;i class="([^"]+)"&gt;&lt;\/i&gt;/, '').trim();
                        span.textContent = tooltipText;
                        item.appendChild(span);
                    } else {
                        // For social links and other items, replace content entirely (icon only)
                        item.innerHTML = '';
                        item.appendChild(icon);
                    }
                    return;
                }
                
                // Only process if it's a FontAwesome icon
                if (!iconClass.includes('fa-')) {
                    return;
                }
                
                // Create the icon element
                const icon = document.createElement('i');
                icon.className = iconClass;
                
                // For main menu items, preserve the span for tooltips but put icon outside span
                if (item.classList.contains('tltp')) {
                    // Clear all content and add icon
                    item.innerHTML = '';
                    item.appendChild(icon);
                    
                    // Add span for tooltip text with the original text content
                    const span = document.createElement('span');
                    // Remove the HTML from the original text for the tooltip
                    const tooltipText = originalText.replace(/<i class="([^"]+)"><\/i>/, '').replace(/&lt;i class="([^"]+)"&gt;&lt;\/i&gt;/, '').trim();
                    span.textContent = tooltipText;
                    item.appendChild(span);
                } else {
                    // For social links and other items, replace content entirely (icon only)
                    item.innerHTML = '';
                    item.appendChild(icon);
                }
            }
        });
    }
    
    // Run the processor
    processFontAwesomeIcons();
    
    // Also run when dynamic content is loaded (for Publii's dynamic features)
    if (typeof window.publii !== 'undefined') {
        window.publii.on('contentLoaded', processFontAwesomeIcons);
    }
});
