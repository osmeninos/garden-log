const linkClass =
	"text-foreground underline underline-offset-4 hover:text-primary";

const Footer = () => {
	return (
		<footer className="mx-auto w-full max-w-4xl px-6 py-6 text-muted-foreground text-sm">
			Feito por{" "}
			<a
				className={linkClass}
				href="https://github.com/luannzin"
				rel="noreferrer"
				target="_blank"
			>
				luannzin
			</a>{" "}
			&{" "}
			<a
				className={linkClass}
				href="https://github.com/di0rio"
				rel="noreferrer"
				target="_blank"
			>
				di0rio
			</a>{" "}
			pela equipe{" "}
			<a
				className={linkClass}
				href="https://github.com/osmeninos"
				rel="noreferrer"
				target="_blank"
			>
				Os Meninos
			</a>
		</footer>
	);
};

export default Footer;
