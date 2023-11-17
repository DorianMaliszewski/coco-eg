pub struct PortForwardRuleForwardTo {
    pub address: Option<String>,
    pub port: Option<i128>,
}
pub struct PortForwardRule {
    pub order: i128,
    pub description: Option<String>,
    pub original_port: Option<i128>,
    pub protocol: Option<String>,
    pub forward_to: Option<PortForwardRuleForwardTo>
}
pub struct PortForward {
    pub auto_firewall: Option<bool>,
    pub hairpin_nat: Option<bool>,
    pub lan_interface: Vec<String>,
    pub rules: Vec<PortForwardRule>,
    pub wan_interface: Option<String>,
}
