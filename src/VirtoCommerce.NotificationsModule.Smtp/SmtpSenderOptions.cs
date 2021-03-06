namespace VirtoCommerce.NotificationsModule.Smtp
{
    /// <summary>
    /// Smtp protocol
    /// </summary>
    public class SmtpSenderOptions
    {
        /// <summary>
        /// Server of Sending
        /// </summary>
        public string SmtpServer { get; set; }

        /// <summary>
        /// Port of Server
        /// </summary>
        public int Port { get; set; }

        /// <summary>
        /// Login of Sending Server
        /// </summary>
        public string Login { get; set; }

        /// <summary>
        /// Password of Sending Server
        /// </summary>
        public string Password { get; set; }

        /// <summary>
        /// Enable SSL option
        /// If use smtp.gmail.com then SSL is enabled and check https://www.google.com/settings/security/lesssecureapps
        /// </summary>
        public bool EnableSsl { get; set; }
    }
}
