export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="text-gray-700 mb-4">
        N’hésite pas à me contacter pour collaborer ou échanger sur des sujets DevOps.
      </p>
      <div className="flex flex-col space-y-2">
        <a href="mailto:prenom.nom@email.com" className="text-blue-600 hover:underline">
          📧 prenom.nom@email.com
        </a>
        <a href="https://github.com/tonpseudo" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
          💻 github.com/tonpseudo
        </a>
        <a href="https://linkedin.com/in/tonprofil" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
          🔗 linkedin.com/in/tonprofil
        </a>
      </div>
    </section>
  );
}
