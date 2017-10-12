define({"205":{i:0.000900132803448341,u:"../developing_with_spryker/module_guide/zed_api/zed_api_project_implementation.html",a:"For the API and the API bundles to get activated we need to configure our own service provider stack in the Zed ApplicationDependencyProvider class:\n\n \u003c?php\n    /**\n     * @param \\Spryker\\Zed\\Kernel\\Container $container\n     *\n     * @return \\Silex\\ServiceProviderInterface[]\n     */\n    protected ...",t:"Project Implementation - Zed API"},"206":{i:0.000900132803448341,u:"../developing_with_spryker/module_guide/zed_api/zed_api_appendix.html",a:"API Documentation\n We will soon provide an extensive documentation on the API resource URIs available and a tool to parse those to a standard.\n\n Logging\n By default all incoming requests and outgoing responses will be logged as “info” level.\n\n Security recommendations\n Secure the API with a token ...",t:"Appendix - Zed API"},"207":{i:0.00130741974418082,u:"../developing_with_spryker/module_guide/data_feed.html",a:"BETA version\n This module is still in development. DataFeed modules help to query abstract products, categories, prices, availability data and related information for exporting or processing. The data Feed is not dependent on collectors. Every DataFeed module has an API to get a query. With the ...",t:"Data Feed Modules"},"208":{i:0.00600035065149686,u:"../developing_with_spryker/module_guide/flysystem.html",a:"The Flysystem moduleintegrates Spryker with the  thephpleague/flysystem  vendor package. It handles operations, flysystem adapter configuration and provides a FlysystemFilesystemBuilderPluginInterface, where the build() method is expected to return a concrete implementation of the ...",t:"Flysystem"},"209":{i:0.00092263403945879,u:"../developing_with_spryker/module_guide/user_rights_management.html",a:"User and rights management is a general term that describes the security functionality for controlling user access to perform various roles throughout the system. In the Spryker Commerce OS user and rights management is implemented in the following three bundles: ACL - ACL stands for Access Control ...",t:"User and Rights Management"},"210":{i:0.00128599055477663,u:"../developing_with_spryker/industry_partner_integration/partner_integration.html",a:"In this section you will find information about our Industry Partner Integration solutions. Please visit our Partners Registry for a complete list of our partners  https://spryker.com/find-a-partner/   Academy Navigation To navigate through content, click on an option from the right-hand table of ...",t:"Industry Partner Integration"},"211":{i:0.00103582605266534,u:"../developing_with_spryker/industry_partner_integration/partner_analytics_netmind.html",a:"This integration is built and supported by our industry partner Mindlab Solutions. Partner Information Netmind Documentation Spryker customers can easily connect to Netmind and access comprehensive Netmind e-commerce reporting. On request, this can be individually adapted to customer-specific ...",t:"Netmind-Spryker Module"},"212":{i:0.000900132803448341,u:"../developing_with_spryker/industry_partner_integration/arvatorss/integration_arvato_rss.html",a:"The purpose of developing the risk solution services is to provide a complete and comprehensive risk management\n    for the eCommerce/mail-order industry, contributing to a high level of modularization and automation. Besides the use\n    of pre-configured service modules for risk management, risk ...",t:"Risk Solution Services Integration - Arvato"},"213":{i:0.00128269142791913,u:"../developing_with_spryker/industry_partner_integration/arvatorss/integration_arvato_rss_risk_check.html",a:"\n    Accounted for by external credit agency data and internal existing customer- and order-details\n    the RiskCheck evaluates the probability of payment default for the customer orders.\n \n    The returned decision codes (Result – ActionCode – ResultCode) manage the definition of the eShop’s ...",t:"Risk Check - Arvato Risk Solution Services"},"214":{i:0.00100944269925356,u:"../developing_with_spryker/industry_partner_integration/ratepay/integration_payment_ratepay.html",a:"Partner Information BETA version\n This module is still in development. RatePAY is an online service provider that allows merchants to provide their customers secure, customized payment methods.  RatePAY bears the full risk and takes over the complete processing.\n\n RatePAY provides four methods of ...",t:"Payment Integration - RatePAY"},"215":{i:0.000900132803448341,u:"../developing_with_spryker/industry_partner_integration/ratepay/integration_payment_ratepay_payment_workflow.html",a:"Invoice, Prepayment and Direct Debit methods have the same request flow.  The payment workflow consists of the following requests:\n PAYMENT INIT - Initialize the transaction and get a valid transaction-id.\n PAYMENT QUERY - Check the customer and order details, perform a configurable risk scoring, ...",t:"Payment Workflow - RatePAY"},"216":{i:0.00130591996761751,u:"../developing_with_spryker/industry_partner_integration/ratepay/integration_payment_ratepay_invoice.html",a:"Workflow Scenarios\n Integrating RatePAY Invoice Payment\n To integrate invoice payment, you need to: RatePAY invoice payment configuration and call the facade functions.\n Setting RatePAY Invoice Configuration\n The configuration to integrate invoice payments using RatePAY is:\n\n PROFILE_ID: merchant’s ...",t:"Invoice - RatePAY"},"217":{i:0.00130591996761751,u:"../developing_with_spryker/industry_partner_integration/ratepay/integration_payment_ratepay_prepayment.html",a:"Workflow Scenarios\n Integrating RatePAY Prepayment Payment\n To integrate prepayment payment: set RatePAY prepayment payment configuration and call the facade functions.\n\n Set RatePAY Prepayment Configuration\n The configuration to integrate prepayment payments using RatePAY is:\n\n PROFILE_ID: ...",t:"Prepayment - RatePAY"},"218":{i:0.00130591996761751,u:"../developing_with_spryker/industry_partner_integration/ratepay/integration_payment_ratepay_dir_deb.html",a:"Workflow Scenarios\n Integrating RatePAY  Direct Debit Payment\nIn order to integrate direct debit payment, two simple steps are needed: set RatePAY Direct Debit payment configuration and call the facade functions.\n \nSet RatePAY Direct Debit Configuration\n The configuration to integrate Direct Debit ...",t:"Direct Debit (ELV) - RatePAY"},"219":{i:0.00130591996761751,u:"../developing_with_spryker/industry_partner_integration/ratepay/integration_payment_ratepay_installment.html",a:"The shop must implement the Calculation Request operation to calculate an example installment plan and show it to the customer. Some input parameters for the calculation are passed from the shop (e.g. the shopping basket total), others are stored in the merchant’s RatePAY profile held by the Gateway ...",t:"Installment - RatePAY"},"220":{i:0.00423024942321562,u:"../developing_with_spryker/industry_partner_integration/ratepay/integration_payment_ratepay_state_machine.html",a:"Commands\n ConfirmDelivery\n \nSend delivery confirmation data to RatePAY\n Response:\n Success: Delivery confirmed\n Declined: Request format error or delivery confirmation error\n Plugin: ConfirmDeliveryPlugin\n ConfirmPayment \n\nSend payment confirmation data to RatePAY\n Response:\n Success: Payment ...",t:"RatePAY State Machine Commands and Conditions"},"221":{i:0.000900132803448341,u:"../developing_with_spryker/industry_partner_integration/ratepay/integration_payment_ratepay_structure_diag.html",a:"RatePAY Core Module Structure Diagram The RatePAY core module uses the following class structure and flow.\n",t:"RatePAY Core Module Structure Diagram"},"222":{i:0.000900132803448341,u:"../developing_with_spryker/industry_partner_integration/ratepay/integration_payment_ratepay_facade.html",a:"RatePAY Facade\n",t:"RatePAY Facade\n"},"223":{i:0.000900132803448341,u:"../developing_with_spryker/industry_partner_integration/ratepay/integration_payment_ratepay_disable_addr_updates.html",a:"To disable updates on addresses from the backend application, follow the steps described below:\n\n Step 1:\n\n Overwrite on project side  ‘/vendor/spryker/spryker/Bundles/Sales/src/Spryker/ Zed/Sales/Presentation/Detail/boxes/addresses.twig’\n Remove ‘Edit’ button\n Step 2:\n\n Overwrite on project side  ...",t:"How to disable address updates from the backend application - RatePAY"},"224":{i:0.00103582605266534,u:"../developing_with_spryker/industry_partner_integration/payone/integration_payment_payone.html",a:"We integrate with a wide range of payment methods that can be configured according to your needs and convenience. Payment method flows are configured using state machines.\n\n Payone provides seven main methods of payment:\n\n Credit Card Direct Debit\n Online Transfer Paypal Prepayment Invoice Paypal ...",t:"Payment Integration - Payone"},"225":{i:0.00119182201573051,u:"../developing_with_spryker/industry_partner_integration/payone/authorization_and_preauthorization_capture_flows.html",a:"Payone module makes it possible for a project to choose which Payone flow it wants to implement: authorize or preauthorize + capture. Authorization Example State Machine: Authorization state machine example xml can be found in vendor/\u003cpayone_module_folder\u003e/src/config/Zed/Oms/PayoneInvoice.xml ...",t:"Authorization and Preauthorization-Capture Flows"},"226":{i:0.000988178545364266,u:"../developing_with_spryker/industry_partner_integration/payone/integration_payment_payone_credit_card.html",a:"PCI Compliance Because of PCI compliance reasons, credit card data is communicated to the third party through AJAX calls (sensitive information stays browser side).\n PCI Compliance\n The Payment Card Industry Data Security Standard ( PCI DSS ) is a set of rules with the intention to ensure that ...",t:"Credit Card Payment - Payone"},"227":{i:0.000988178545364266,u:"../developing_with_spryker/industry_partner_integration/payone/integration_payment_payone_dir_deb.html",a:"Front-end integration\n Run the antelope build yves after you include the javascript file for credit card check inside the payment step template (e.g. src/\u003cproject_name\u003e/Yves/Checkout/Theme/\u003ccustom_theme_name\u003e/checkout/payment.twig)\n\n {% block content %}\n\u003cscript ...",t:"Direct Debit Payment- Payone"},"228":{i:0.000988178545364266,u:"../developing_with_spryker/industry_partner_integration/payone/integration_payment_payone_online_trans.html",a:"Supported online banking service providers are SofortBanking, Giropay, Electronic Payment Standard (Eps), PostFinance Card, PostFinance E-Finance, iDEAL and Przelewy24. They are enabled  through the integration with Payone, using the online transfer payment type.\n\n Each payment method is limited to ...",t:"Online Transfer Payment- Payone"},"229":{i:0.000988178545364266,u:"../developing_with_spryker/industry_partner_integration/payone/integration_payment_payone_prepayment.html",a:"Prepayment method is a safe alternative to payments involving credit cards or debit cards (such as online banking transfer). Usually bank transfer would require manual processing to mark transaction as cancelled or completed, but the process is fully automated through the integration with the Payone ...",t:"Pre-payment - Payone"},"230":{i:0.000988178545364266,u:"../developing_with_spryker/industry_partner_integration/payone/integration_payment_payone_paypal.html",a:"The payment using PayPal requires a redirect to PayPal website. When the customer is redirected to PayPal’s website, he must authorize himself and he has the option to either cancel or validate the transaction.\n \nA concern regarding payment flows that require redirection on third party website pages ...",t:"Paypal Payment - Payone"},"231":{i:0.00119182201573051,u:"../developing_with_spryker/industry_partner_integration/payone/integration_payment_payone_paypal_express_checkout.html",a:"The payment using PayPal requires redirect to PayPal website. When the customer is redirected to PayPal’s website, he must authorize himself and he has the option to either cancel or validate the transaction. A concern regarding payment flows that require redirection on third party website pages is ...",t:"PayPal Express Checkout Payment - Payone"},"232":{i:0.000988178545364266,u:"../developing_with_spryker/industry_partner_integration/payone/integration_payment_payone_invoice.html",a:"Front-end Integration\n To adjust the frontend appearance, provide the following templates in your theme directory:\n\nsrc/\u003cproject_name\u003e/Yves/Payone/Theme/\u003ccustom_theme_name\u003e/invoice.twig State Machine Integration\n Payone module provides a demo state machine for the Invoice payment method which ...",t:"Invoice Payment - Payone"},"233":{i:0.000988178545364266,u:"../developing_with_spryker/industry_partner_integration/payone/integration_payment_payone_state_machine_cmd_cond_evnt.html",a:"State Machine Commands, Conditions and Events - Payone",t:"State Machine Commands, Conditions and Events - Payone"},"234":{i:0.000988178545364266,u:"../developing_with_spryker/industry_partner_integration/payone/integration_payment_payone_facade.html",a:"Payone Facade  ",t:"Payone Facade"},"235":{i:0.00117235747554656,u:"../developing_with_spryker/industry_partner_integration/econda/integration_monitoring_econda.html",a:"BETA version\n This module is still in development. econda is one of the leading providers for Analytics and Personalization Solutions in the European market. Our econda moduleoffers integration with these services. Prerequisites  To integrate with econda you will need your econda account. If you do ...",t:"Monitoring Integration - econda (BETA)"},"236":{i:0.00109943479920846,u:"../developing_with_spryker/industry_partner_integration/econda/integration_monitoring_econda_export_csvs.html",a:"Exporting CSVs to econda\n Output folder\n We need to define output folder where we Zed is going to generate the CSV files. This is done by adding a line in your config.\n\n \u003c?php\n$config[EcondaConstants::ECONDA_CSV_FOLDER_PATH] = APPLICATION_ROOT_DIR . \u0027/path/to/generated/csv/files\u0027;\n Zed needs must ...",t:"Exporting CSVs to econda\n"},"237":{i:0.00109943479920846,u:"../developing_with_spryker/industry_partner_integration/econda/integration_monitoring_econda_tracking.html",a:"Prerequisites\n To enable econda tracking for your application, you need to download a personalized JavaScript library from the econda Analytics Configuration menu (you can find detailed instructions on this on  https://support.econda.de/display/MONDE/Tracking-Bibliothek+herunterladen ).\n\n These ...",t:"Tracking - econda"},"238":{i:0.00109943479920846,u:"../developing_with_spryker/industry_partner_integration/econda/integration_monitoring_econda_cross_sell.html",a:"Prerequisites\n The  econda JS SDK  download\n\n An econda id found in your account details (see image below).\n These instructions assume  you are using  Antelope  for your Yves assets management. If your project uses other frontend automation you can still use the instructions as guidelines.  Before ...",t:"Cross Sell - econda"},"239":{i:0.00092651615686012,u:"../developing_with_spryker/industry_partner_integration/integration_heroku.html",a:"This article describes the aspects you need to consider when using Heroku as an application hosting solution.\n\n In the scenario described below, 3 applications will be sharing the Redis, Elasticsearch and database add-ons between them.\n\n Preconditions\n     Applications\n     Heroku Configuration ...",t:"Application Hosting with Heroku"},"240":{i:0.00621928995278661,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay.html",a:"Amazon pay is a solution which allows buyers to make purchases via their Amazon accounts. Basically it\n            consists of client side tools (widget, javascripts etc) and Amazon API with SDKs written for different\n            programming languages (PHP, Python, Ruby, Java, C#). Client side tools ...",t:"Payment Integration - Amazon Pay"},"241":{i:0.00609828970354171,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay_configuration.html",a:"\n            Please refer to config/Shared/config.dist.php for example of module configuration.\n         To setup the Amazon Pay initial configuration, use the credentials you received after registering as an Amazon seller: \n$config[AmazonpayConstants::CLIENT_ID] = ...",t:"Amazon Pay - Configuration"},"242":{i:0.00609828970354171,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay_rendering_pay.html",a:"Usually the checkout page includes information for the buyer to review, items in the cart, prices, total price information and some other order related details. From this page, the buyer can proceed to checkout by clicking a related GUI element (for example hyperlink or button). Amazon Pay provides ...",t:"Rendering a \"Pay with Amazon\" Button on the Cart Page"},"243":{i:0.00609828970354171,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay_order_ref_info.html",a:"After successful authorization, a buyer will be redirected to an order details page to enter all the information necessary for placing an order: address of shipment, payment method, delivery method and some calculations about taxes, possible discounts, delivery cost, etc. Amazon Pay provides ...",t:"Obtaining an Amazon Order Reference and Information about Shipping Addresses"},"244":{i:0.00609828970354171,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay_api.html",a:"So far we discussed the client side implementation provided by Amazon Pay. On the Spryker OS side, the module provides tools for rendering Amazon Pay widgets. Another part of the implementation is the Amazon Pay API function wrapper, implemented as a Facade. Each API call involves similar classes ...",t:"Amazon Pay API"},"245":{i:0.00609828970354171,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay_refund.html",a:"After successful authorization and capture processes order should be closed. This blocks any modifications to\n            an order. From this state only Refund operation is possible. Refund can be partial if more than one item is\n            set to refund or full. Amazon only requires the amount of ...",t:"Amazon Pay - Refund"},"246":{i:0.00609828970354171,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay_state_machine.html",a:"The state machine is different for synchronous and asynchronous flow. Although from status \"capture\n            completed\" it is the same and in the state machine, it\u0027s presented as a sub-process. State machine for the synchronous flow: State machine for the asynchronous flow:   See also: Payment ...",t:"Amazon Pay - State Machine"},"247":{i:0.00609828970354171,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay_simulations.html",a:"In order to reproduce some edge cases like declined payment or pending capture, Amazon provides two solutions. The first is special methods marked with red star on payment widget. It allows to reproduce different cases of \"decline\" payment workflow. But there are more edge cases like expired ...",t:"Amazon Pay Sandbox Simulations"},"248":{i:0.00117235747554656,u:"../developing_with_spryker/industry_partner_integration/billpay/integration_payment_billpay.html",a:"BETA version\n This module is still in development. Billpay is one of the leading payment providers in the European market. Our Billpay module offers integration with this service.  Prerequisites To use Billpay, you will need to create a Billpay account or use your existing credentials.  If you do ...",t:"Payment Integration - Billpay (BETA)"},"249":{i:0.000900132803448341,u:"../developing_with_spryker/industry_partner_integration/billpay/integration_payment_billpay_integration.html",a:"Billpay offers multiple payment methods (Invoice, Direct Debit, PayLater, Instalment). Availability of payment methods differs from country to country. Please contact Billpay directly or visit the Billpay website ( https://www.billpay.de/en/business-clients/merchant-request/ ) for details. The ...",t:"Billpay Integration"},"250":{i:0.000900132803448341,u:"../developing_with_spryker/industry_partner_integration/billpay/integration_payment_billpay_payment_methods.html",a:"Refer to Billpay payment information ( https://www.billpay.de/en/business-clients/payment-information/ )for information about payment methods. Using the “prescore” scoring model, the identity and credit check is performed before the payment method is selected. The results of the check are then used ...",t:"Billpay Invoice Payment with Prescoring"},"251":{i:0.000900132803448341,u:"../developing_with_spryker/industry_partner_integration/integration_payment_braintree.html",a:"BETA version\n This module is still in development. Braintree provides two methods of payment:\n\n PayPal Credit Card To integrate Braintree payments, you need to create and configure a Braintree merchant account.\n\n There are two types of accounts for the integration:\n\n test accounts\n live accounts\n ...",t:"Payment Integration - Braintree (BETA)"},"252":{i:0.00100944269925356,u:"../developing_with_spryker/industry_partner_integration/klarna/integration_payment_klarna.html",a:"BETA version\n This module is still in development. The Klarna module provides two methods of payment:\n\n Part Payment – Flexible - Klarna\n Invoice – Pay in 14 days - Klarna\n To Integrate Klarna payments, create and configure a Klarna merchant account.  We use state machines for handling and managing ...",t:"Payment Integration  - Klarna"},"253":{i:0.000900132803448341,u:"../developing_with_spryker/industry_partner_integration/klarna/integration_payment_klarna_payment_workflow.html",a:"Payment Workflow - Klarna\n Both Part Payment and Invoice payment methods have the same request flow. It basically consists of the following steps:\n\n Pre-check: reserves the amount of the purchase\n Check order status: checks if the order status is pending accepted. If it’s not, OMS waits for 2 hours ...",t:"Payment Workflow - Klarna\n"},"254":{i:0.00118614327269337,u:"../developing_with_spryker/industry_partner_integration/klarna/integration_payment_klarna_part_payment_flexible.html",a:"Part Payment – Flexible - Klarna\n Payment Workflow Scenarios\n Cancel Workflow Scenarios\n Refund Workflow Scenarios\n Integrating Klarna Part Payment\n The configuration to integrate Part Payment using Klarna is:\n\n SHARED_SECRET: shared token\n EID: the id of the merchant, received from Klarna.\n ...",t:"Part Payment - Flexible"},"255":{i:0.00118614327269337,u:"../developing_with_spryker/industry_partner_integration/klarna/integration_payment_klarna_invoice_pay_in_14_days.html",a:"Invoice – Pay in 14 days - Klarna\n Payment Workflow Scenarios Cancel Workflow Scenarios\n Refund Workflow Scenarios\n Integrating Klarna Part Payment\n The configuration to integrate Part payment using Klarna is:\n\n SHARED_SECRET: shared token.\n EID: the id of the merchant, received from Klarna.\n ...",t:"Invoice – Pay in 14 days - Klarna\n"},"256":{i:0.00320259921454747,u:"../developing_with_spryker/industry_partner_integration/klarna/integration_payment_klarna_state_machine.html",a:"Klarna State Machine Commands and Conditions\n Commands\n Check Checks order Status\n Update order status\n Plugin: CheckPlugin\n Capture Activates the reservation that corresponds to the given reference number\n Response:\n Success: order activated\n Declined: capture failed. Need to update order\n Plugin: ...",t:"Klarna State Machine Commands and Conditions"},"257":{i:0.00092651615686012,u:"../developing_with_spryker/industry_partner_integration/integration_payment_payolution.html",a:"Payolution provides two methods of payment:\n\n Invoice \nInstallment\n In order to integrate Payolution payments, a Payolution merchant account should be created and configuration data then could be obtained from Payolution. There are two types of accounts for the integration: test and live accounts. ...",t:"Payment Integration - Payolution"},"258":{i:0.00112024715823815,u:"../developing_with_spryker/industry_partner_integration/payolution/integration_payment_payolution_integrating.html",a:"To add Payolution as payment provider to your project you need to follow these steps:\n\n Add spryker/payolution to your project by running composer require spryker/payolution Copy over configs to your config using the provided config.dist.php file from the Payolution module.\n With the provided ...",t:"Integrating Payolution into your Project"},"259":{i:0.00112024715823815,u:"../developing_with_spryker/industry_partner_integration/payolution/integration_payment_payolution_invoice.html",a:"Workflow Scenarios\n Payments from Payolution to Merchant are not included in the sequence diagrams since they occur on a regular basis (e.g. every week).\n\n Standard Case\n Full Refund Before Payment Partial Refund Before Payment\n Full Refund After Payment\n Partial Refund After Payment\n Integrating ...",t:"Invoice Payment - Payolution"},"260":{i:0.00112024715823815,u:"../developing_with_spryker/industry_partner_integration/payolution/integration_payment_payolution_installment.html",a:"Installment Scenarios\n Standard Case\n Full Refund\n  \n\nPartial Refund\n Integrating Payolution Installment Payment\n The In order to integrate installment payment, two simple steps are needed: set Payolution installment payment configuration and call the facade functions.\n\n Set Payolution Installment ...",t:"Installment Payment - Payolution"},"261":{i:0.00207246301916422,u:"../developing_with_spryker/industry_partner_integration/payolution/integration_payment_payolution_requests.html",a:"In order to perform the needed requests, you can easily use the implemented state machine commands and conditions. The next section gives a summary of them. You can also use the facade methods directly which, however, are invoked by the state machine.\n\n Payolution State Machine Commands and ...",t:"Perform Requests - Payolution"},"262":{i:0.00177455994819514,u:"../developing_with_spryker/industry_partner_integration/factfinder/integration_search_factfinder.html",a:"BETA version\n This module is still in development. Prerequisites\n\n\t\t To integrate with FACT-Finder you will need your FACT-Finder account. If you do not have a FACT-Finder account, please contact  FACT-Finder .\n\n\t\t Installation\n\t\t \n\t\t\tComposer dependency:\n\n\t\t To install Spryker\u0027s FactFinder module, ...",t:"Search Integration - Fact Finder (BETA)"},"263":{i:0.000900132803448341,u:"../developing_with_spryker/industry_partner_integration/factfinder/integration_search_factfinder_export_csv.html",a:"Output folder  Define an output folder in which to generate the CSV files.  Adding the following line in your config: \u003c?php\n$config[FactFinderSdkConstants::CSV_DIRECTORY] = APPLICATION_ROOT_DIR . \u0027/path/to/generated/csv/files\u0027; Zed must have Read/Write access to it because in this folder we will ...",t:"Exporting CSVs to FACT-Finder"},"264":{i:0.000900132803448341,u:"../developing_with_spryker/industry_partner_integration/factfinder/integration_search_factfinder_tracking.html",a:"Prerequisites Tracking information lets the FACT-Finder Search tool automatically learn from user behavior. The data provided through this interface can be used for a variety of purposes. These include the tracking of events such as users clicking on a detail page, placing a product into the ...",t:"Fact-Finder - Tracking"},"265":{i:0.000900132803448341,u:"../developing_with_spryker/industry_partner_integration/factfinder/integration_search_factfinder_search.html",a:"Prerequisites  FACT-Finder suggests error-tolerant onsite search. The online shop’s search function is its most powerful sales tool.  FACT-Finder delivers relevant results even when spelling errors and typos occur.   Usage  By default, you can use the /fact-finder route to see an example catalog ...",t:"Fact-Finder - Search"},"266":{i:0.000900132803448341,u:"../developing_with_spryker/industry_partner_integration/factfinder/integration_search_factfinder_suggest.html",a:"Prerequisites  The FACT-Finder Suggest module enables you to provide customers with suggested search terms while they are entering a search term. In this way, users do not necessarily have to enter the entire search term themselves, but can choose a suggestion. As they are presented with similar ...",t:"Fact-Finder - Suggest"},"267":{i:0.00130741974418082,u:"../developing_with_spryker/industry_partner_integration/factfinder/integration_search_factfinder_campaigns.html",a:"Prerequisites The FACT-Finder Campaign Manager module allows you to target the management of search results in order to improve the customer lead process or deliberately highlight products. Campaigns are activated according to specific criteria and are then returned accordingly in the search ...",t:"Fact-Finder - Campaigns"},"268":{i:0.00130741974418082,u:"../developing_with_spryker/industry_partner_integration/factfinder/integration_search_factfinder_recommendation.html",a:"Prerequisites  The FACT-Finder recommendation engine analyzes product and category relationships. The results are rendered in recommendations widget, which can be displayed on product details pages, homepage or in the shopping cart. Usage   To add recommendations widget to product page, insert the ...",t:"Fact-Finder - Recommendation"},});