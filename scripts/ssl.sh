DOMAINS="www.$2,$2"

log() {
  printf "$@\n"
}

is_command() {
  hash $1 2>/dev/null
}

create_certificate() {
	echo "create_certificate" "$DOMAINS"
	# certbot certonly --webroot -w $PWD/public -d $DOMAINS
}

renew_certificate() {
	echo "renew_certificate" "$DOMAINS"
	# certbot certonly --webroot -w $PWD/public --renew-hook="service restart nginx" -d $DOMAINS
}

certbot_install() {
	echo "create_certificate" "$DOMAINS"

  log "Trying to install python3-certbot-nginx"
	apt install -y python3-certbot-nginx
}

help() {
cat << EOF
  Usage:
    ./ssl.sh install navaru.com

  Commands:
    install            tries to install certbot (for linux)
    create [domain]    creates a SSL certificate
    renew [domain]     renews the SSL certificate

  Options:
    no options
EOF
}


if ! is_command certbot; then
	log "certbot is not installed, try: ./ssl.sh install"
	exit 1
fi


case $1 in
	install) certbot_install;;
	create) create_certificate;;
	renew) renew_certificate;;
	*) help;;
esac