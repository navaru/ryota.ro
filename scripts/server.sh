HOST="root@199.247.17.83"
PROJECT="ryota.ro"
PROJECT_PATH="/apps/$PROJECT"

ask() {
	while true; do
    read -p "$@" answer
    case $answer in
      [Yy]*) break;; # just let it flow
      [Nn]*) exit;;
	        *) echo "Press y or n";;
    esac
	done
}

run() {
	ssh $HOST "$@"
}

copy() {
	scp -r "$1" "$HOST:$PROJECT_PATH/$2"
}

sync() {
	echo "\nSyncing path: $1"
	rsync \
		--links \
		--perms \
		--times \
		--delete \
		--compress \
		--recursive \
		--verbose --human-readable \
		-e ssh "$1" "$HOST:$2"
}

sync_public() {
	sync "public" "$PROJECT_PATH/public"
}

sync_database() {
	sync "database" "$PROJECT_PATH/database"
}

restart_server() {
	run "systemctl restart $PROJECT"
}

deploy_server() {
	nore build server --debug
	sync ".nore/server" "$PROJECT_PATH/.nore"
	copy ".nore/server/package.json" "package.json"
	copy "yarn.lock" "yarn.lock"
	run "yarn install --pure-lockfile --cwd $PROJECT_PATH"
	restart_server
}

deploy_client() {
	nore build client --debug
	sync ".nore/client" "$PROJECT_PATH/.nore"
	sync_public
}

deploy() {
	deploy_server
	deploy_client
}

case $1 in
	deploy:server) deploy_server;;
	deploy:client) deploy_client;;
	deploy) deploy;;
	sync:public) sync_public;;
	sync:database) sync_database;;
	restart) restart_server;;
esac
