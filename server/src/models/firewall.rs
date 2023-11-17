pub struct RuleState {
    pub state: String,
    pub enabled: bool,
}

pub struct RuleDestination {
    pub address: Vec<String>,
    pub group: Vec<String>
}

pub struct RuleSource {
    pub group: Vec<String>,
    pub address: Vec<String>,
}

pub struct Rule {
    pub order: i64,
    pub action: String,
    pub description: String,
    pub destination: Option<RuleDestination>,
    pub source: Option<RuleSource>,
    pub log: Option<bool>,
    pub protocol: String,
    pub ipv6: bool,
    pub state: Vec<RuleState>,
}

pub struct RuleSet {
    pub name: String,
    pub default_action: String,
    pub description: String,
    pub rules: Vec<Rule>,
    pub enable_default_log: bool,
}

pub struct FirewallGroup {
    pub group_type: String,
    pub name: String,
    pub description: Option<String>,
    pub address: Vec<String>,
    pub network: Vec<String>,
}

pub struct Firewall {
    pub rule_sets: Vec<Rule>,
    pub all_ping: Option<String>,
    pub broadcast_ping: Option<String>,
    pub groups: Vec<FirewallGroup>,
    pub ipv6_receive_redirects: Option<bool>,
    pub ipv6_src_route: Option<bool>,
    pub ip_src_route: Option<bool>,
    pub log_martians: Option<bool>,
    pub receive_redirects: Option<bool>,
    pub send_redirects: Option<bool>,
    pub source_validation: Option<bool>,
    pub syn_cookies: Option<bool>,
}
